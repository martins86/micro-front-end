# Micro Front-end

> Angular com web elements (angular elements).

<br>
<br>

### Dependências

<br>

```sh
npm install -g @angular/cli
npm install -g live-server
```

<br>

### Comandos usados

<br>

```sh
ng new portal --routing=true --strict=true --style=scss
cd portal
ng g m features/layout/top-bar/
ng g c features/layout/top-bar/
ng g m features/layout/main-content/
ng g c features/layout/main-content/
ng add @angular/elements
ng serve --port 4200

ng g app app1 --routing=true --strict=true --style=scss
ng g m hello-app1 --project app1
ng g c hello-app1 --project app1
ng serve --project app1 --port 4201

ng g app app2 --routing=true --strict=true --style=scss
ng g m hello-app2 --project app2
ng g c hello-app2 --project app2
ng serve --project app2 --port 4202

ng add ngx-build-plus
ng add ngx-build-plus --project app1
ng add ngx-build-plus --project app2
```

<br>

```sh
npx live-server ./dist
```

<br>

## Licença

Este projeto é [MIT licensed](./LICENSE).
