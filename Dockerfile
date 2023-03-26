FROM node:18.12.1
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
USER root

HEALTHCHECK --interval=12s --timeout=12s --start-period=30s \
     CMD curl -f http://localhost:3000/healthz || exit 1

CMD ["node", "src/app.js"]
