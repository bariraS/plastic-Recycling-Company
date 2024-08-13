FROM node:18-alpine AS builder

WORKDIR /app

RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf

RUN yarn config set registry https://registry.npm.taobao.org

COPY package.json yarn.lock ./

RUN yarn cache clean

RUN yarn install --network-timeout 600000 --frozen-lockfile || cat /app/yarn-error.log

RUN yarn build

FROM node:18-alpine AS runner

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000