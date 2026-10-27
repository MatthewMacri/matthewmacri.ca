#!/usr/bin/env bash
# Points `current` back at the previous release. No rebuild.
set -euo pipefail
ROOT=/var/www/matthewmacri
now=$(readlink -f "$ROOT/current")
prev=$(ls -1dt "$ROOT"/releases/* | grep -vx "$now" | head -1)
[ -n "$prev" ] || { echo "no earlier release"; exit 1; }
sudo ln -sfn "$prev" "$ROOT/current.next"
sudo mv -Tf "$ROOT/current.next" "$ROOT/current"
echo "rolled back to $prev"
