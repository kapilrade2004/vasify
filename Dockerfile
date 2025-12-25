FROM node:22-alpine

RUN npm install -g pnpm@latest

WORKDIR /app

COPY package.json /app
COPY pnpm-lock.yaml /app

RUN npm config set jobs 1

RUN pnpm install --fetch-concurrency=1 --lockfile-intake-concurrency=1

COPY . /app

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
