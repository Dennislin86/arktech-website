#!/bin/zsh
set -u

cd "$(dirname "$0")"

NODE_BIN=""

if command -v node >/dev/null 2>&1; then
  NODE_BIN="$(command -v node)"
elif [ -x "/Applications/Codex.app/Contents/Resources/node" ]; then
  NODE_BIN="/Applications/Codex.app/Contents/Resources/node"
elif [ -x "$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node" ]; then
  NODE_BIN="$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node"
else
  echo "Node.js was not found. Please install Node.js 20+."
  read "?Press Enter to close..."
  exit 1
fi

if [ ! -f "node_modules/next/dist/bin/next" ]; then
  echo "Next.js dependencies are missing."
  read "?Press Enter to close..."
  exit 1
fi

echo "Starting Arktech website..."
echo "Website URL: http://localhost:3000"
echo "Keep this terminal window open while previewing the site."

export NEXT_TEST_WASM_DIR="$PWD/node_modules/@next/swc-wasm-nodejs"

sleep 2
open "http://localhost:3000" >/dev/null 2>&1 || true

if ! "$NODE_BIN" node_modules/next/dist/bin/next dev --webpack -H 127.0.0.1 -p 3000; then
  echo ""
  echo "Could not start on port 3000. Trying port 3001..."
  echo "If this works, open http://localhost:3001"
  sleep 2
  open "http://localhost:3001" >/dev/null 2>&1 || true

  if ! "$NODE_BIN" node_modules/next/dist/bin/next dev --webpack -H 127.0.0.1 -p 3001; then
    echo ""
    echo "The local server could not start."
    echo "Please copy the full error text and send it to Codex."
    read "?Press Enter to close..."
  fi
fi
