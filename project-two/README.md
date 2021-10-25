# Micro Front-end

> Angular com web elements (angular elements).


<br>
<br>

### Dependências

<br>

```sh
npm install -g @angular/cli
```

<br>

### Comandos usados

<br>

```sh
ng new portal --routing=tue --strict=true --style=scss
ng g m shared/components/layout/top-bar/top-bar
ng g c shared/components/layout/top-bar
ng g m shared/components/layout/main-content/main-content
ng g c shared/components/layout/main-content
ng add @angular/elements
ng add ngx-build-plus

ng g app app1 --routing=false --strict=true --style=scss
ng add @angular/elements ngx-build-plus --project app1
ng g c hello-app1 --project app1
ng server --project app1 --port 4201

ng g app app2 --routing=false --strict=true --style=scss
ng add @angular/elements ngx-build-plus --project app2
ng g c hello-app2 --project app2
ng server --project app2 --port 4202
```

<br>

## Licença

Este projeto é [MIT licensed](./LICENSE).
