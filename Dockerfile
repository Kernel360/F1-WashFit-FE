FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock* ./

RUN yarn install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# This will do the trick, use the corresponding env file for each environment.
COPY .env.dev .env.production
RUN yarn build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]