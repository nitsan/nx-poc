FROM node:16-alpine AS builder

RUN apk update && apk add git

WORKDIR /app

COPY package*.json ./

RUN npm ci --prefer-offline --no-audit --no-fund

COPY libs /app/libs
COPY apps /app/apps
COPY *.json ./

COPY .git /app/.git

RUN npm run nx:report
RUN npm run build:affected

RUN npm prune --production && rm -rf node_modules/@angular

FROM node:16-alpine AS runner

WORKDIR /app

COPY package.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start:prod" ]
