## !/usr/bin/env node

## Build do MF ANGULAR
## versão do node usada no app, referência ao build do app.
FROM node:16.11.1 as buildApp

## diretorio do app
WORKDIR /app

## copiando de .(repo) para .(container).
COPY . .

## instalando dependências no container e rodndo build.
RUN npm ci --silent
RUN npm run build -- --deploy-url /mf-angular/


## Iniciando o Nginx
FROM nginx

## substituindo arquivo ngixn.conf
COPY ./nginx.conf /etc/nginx/nginx.conf

## copiando o build gerado para a pasta do nginx
COPY --from=buildApp /app/dist/app-angular /usr/share/nginx/html