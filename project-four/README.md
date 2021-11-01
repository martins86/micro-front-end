# Micro Front-end

> Angular com module module federation plugin.

<br>
<br>

### Dependências

<br>

```sh
npm install -g @angular/cli
npm install -g live-server
npm install
```

<br>

### Comandos usados

<br>

```sh
ng new mfe-workspace --create-application=false

cd mfe-workspace

ng g app portal --routing=true --strict=true --style=scss

ng add @angular-architects/module-federation --project portal --port 5000

ng g m layout/v1/top-bar/ --project portal
ng g c layout/v1/top-bar/ --project portal
ng g m layout/v1/main-content/ --project portal
ng g c layout/v1/main-content/ --project portal

ng g m pages/home/ --module app --project portal
ng g c pages/home/ --project portal
ng g m pages/notfound/ --module app --project portal
ng g c pages/notfound/ --project portal

ng serve --project portal --port 5000 --host 0.0.0.0 --disable-host-check --open
```

<br>

```sh
ng g app mfe1 --routing=true --strict=true --style=scss
ng add @angular-architects/module-federation --project mfe1 --port 3001

ng serve --project mfe1 --port 3001 --host 0.0.0.0 --disable-host-check --open
ng build --project mfe1 --base-href ./ --single-bundle=true --output-hashing=none --vendor-chunk=false --aot
```

<br>

```sh
npx live-server ./dist
```

<br>

## Licença

Este projeto é [MIT licensed](./LICENSE).
