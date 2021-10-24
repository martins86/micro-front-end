# Micro Front-end

> 3 páginas com frameworks diferentes rodando apartir do localhost/.

- Angular (http://localhost/mf-angular) - [ReadMe](./mf-angular/README.md).<br>
- React (http://localhost/mf-react) - [ReadMe](./mf-react/README.md).<br>
- Vue (http://localhost/mf-vue) - [ReadMe](./mf-vue/README.md).<br>

<br>
<br>

### Execuntando o projeto

> Acesse a pasta raiz e execute os comandos: <br>
>
>  - docker-compose build > roda o build dos 3 app + o orchestrator <br>
>  - docker-compose up   > sobe os containers e serve o projeto em localhost:80


```sh
docker-compose build
```
```sh
docker-compose up
```

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

<br>

### Comandos usados

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
