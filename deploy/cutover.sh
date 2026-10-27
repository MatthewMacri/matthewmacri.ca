#!/usr/bin/env bash
# One-time switch of matthewmacri.ca from the old Next.js server (:3000) to the static site.
# Replaces only the final `location / { ... }` block; every other app's location is untouched.
# Undo:  deploy/cutover.sh --undo
set -euo pipefail
CONF=/etc/nginx/sites-available/matthewmacri.ca.conf
BAK=$CONF.pre-astro.bak
SNIPPET="$(cd "$(dirname "$0")" && pwd)/site-location.conf"

if [ "${1:-}" = "--undo" ]; then
  sudo cp "$BAK" "$CONF" && sudo nginx -t && sudo systemctl reload nginx && echo "restored old site"
  exit 0
fi

[ -e /var/www/matthewmacri/current/index.html ] || { echo "no release; run deploy/deploy.sh first"; exit 1; }
[ -e "$BAK" ] || sudo cp "$CONF" "$BAK"

sudo python3 - "$BAK" "$SNIPPET" "$CONF" <<'PY'
import re, sys
src, snippet, dst = sys.argv[1:]
conf = open(src).read()
m = re.search(r'\n    location / \{.*?\n    \}\n', conf, re.S)
if not m:
    sys.exit('could not find `location /` block')
conf = conf[:m.start()] + '\n' + open(snippet).read() + conf[m.end():]
open(dst, 'w').write(conf)
PY

if sudo nginx -t; then
  sudo systemctl reload nginx
  echo "matthewmacri.ca now serves /var/www/matthewmacri/current"
else
  sudo cp "$BAK" "$CONF"
  echo "nginx -t failed; config restored, nothing changed"
  exit 1
fi
