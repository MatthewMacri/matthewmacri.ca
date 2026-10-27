#!/usr/bin/env bash
# Builds the site into a fresh release folder and switches `current` to it in one atomic rename.
# nginx serves /var/www/matthewmacri/current, so visitors never see a half-copied site.
# Usage: deploy/deploy.sh            (build HEAD and go live)
set -euo pipefail

REPO="$(cd "$(dirname "$0")/.." && pwd)"
ROOT=/var/www/matthewmacri
KEEP=5

cd "$REPO"
sha=$(git rev-parse --short HEAD)
log() { echo "[deploy $(date +%H:%M:%S)] $*"; }

log "building $sha"
npm ci --no-audit --no-fund --loglevel=error
npm run --silent github || log "github refresh failed, using snapshot"
npm run --silent build

release="$ROOT/releases/$(date +%Y%m%d-%H%M%S)-$sha"
sudo mkdir -p "$release"
sudo rsync -a --delete dist/ "$release/"
sudo chown -R www-data:www-data "$release"

sudo ln -sfn "$release" "$ROOT/current.next"
sudo mv -Tf "$ROOT/current.next" "$ROOT/current"
log "live: $release"

ls -1dt "$ROOT"/releases/* | tail -n +$((KEEP + 1)) | xargs -r sudo rm -rf
