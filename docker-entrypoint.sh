#!/bin/sh
set -e

echo "⏳  Wachten op de database..."
# Probeer het schema te pushen; herhaal tot de database bereikbaar is.
ATTEMPTS=0
until npx prisma db push --skip-generate --accept-data-loss > /tmp/dbpush.log 2>&1; do
  ATTEMPTS=$((ATTEMPTS + 1))
  if [ "$ATTEMPTS" -ge 30 ]; then
    echo "❌  Database niet bereikbaar na 30 pogingen."
    cat /tmp/dbpush.log
    exit 1
  fi
  echo "   ... database nog niet klaar (poging $ATTEMPTS), opnieuw proberen over 2s"
  sleep 2
done
echo "✓  Databaseschema is up-to-date."

echo "🌱  Seed-data laden (overslaan indien al aanwezig)..."
npx prisma db seed || echo "⚠️  Seed overgeslagen."

echo "🚀  Server starten op poort ${PORT:-3022}..."
exec node server.js
