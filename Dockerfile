# syntax=docker/dockerfile:1

# ------------------------------------------------------------------ base
FROM node:20-bookworm-slim AS base
# OpenSSL is nodig voor de Prisma engines
RUN apt-get update -y \
  && apt-get install -y --no-install-recommends openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
# Tolereer een ontbrekende checksum bij het downloaden van de Prisma engines
ENV PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1

# ------------------------------------------------------------------ deps
FROM base AS deps
COPY package.json package-lock.json* ./
# --ignore-scripts: de postinstall (prisma generate) draaien we apart in de
# builder-stap, zodat 'npm ci' niet faalt en de stappen duidelijk gescheiden zijn.
RUN npm ci --ignore-scripts

# ------------------------------------------------------------------ builder
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Genereer de Prisma client (engines worden hier gedownload — internet nodig)
RUN npx prisma generate
RUN npx next build

# ------------------------------------------------------------------ runner
FROM base AS runner
ENV NODE_ENV=production
ENV PORT=3023
ENV HOSTNAME=0.0.0.0

# Next.js standalone output
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# Volledige node_modules + prisma zodat we kunnen migreren en seeden bij start
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./package.json
COPY docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

EXPOSE 3023
ENTRYPOINT ["./docker-entrypoint.sh"]
