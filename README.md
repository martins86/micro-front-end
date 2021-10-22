# Micro Front-end

> Micro Front-end orientado a url's com nginx.

- Angular - [ReadMe app angular](./mf-angular/README.md).<br>
- React - [ReadMe app react](./mf-react/README.md).<br>
- Vue - [ReadMe app vue](./mf-vue/README.md).<br>

<br>
<br>

### Dependências

<br>

```sh
npm install -g @angular/cli

npm install -g create-react-app

npm install -g vue
npm install -g @vue/cli
```

### Comandos

<br>

```sh
ng new app-angular --directory ./mf-angular --routing=false --strict=true --style=scss

create-react-app mf-react

vue create mf-vue
```

<br>

```sh
cd ./micro-front-end-com-nginx
docker build -t orchestrator .
docker run --name orchestrator -d -p 80:80 orchestrator

cd ./mf-angular
docker build -t mf-angular .
docker run --name mf-angular -d -p 80:80 mf-angular

cd ./mf-react
docker build -t mf-react .
docker run --name mf-react -d -p 81:80 mf-react

cd ./mf-vue
docker build -t mf-vue .
docker run --name mf-vue -d -p 82:80 mf-vue

docker ps

cd ./micro-front-end-com-nginx
docker-compose build
docker-compose up
docker-compose dow
```

<br>
<br>

## Licença

Este projeto é [MIT licensed](./LICENSE).
