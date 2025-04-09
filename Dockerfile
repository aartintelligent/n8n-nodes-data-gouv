FROM node AS builder

COPY ./src /src

WORKDIR /src

RUN npm install && \
    npm run build

FROM docker.n8n.io/n8nio/n8n

USER root

COPY --from=builder /src/dist /home/node/.n8n/custom/n8n-nodes-data-gouv

USER node
