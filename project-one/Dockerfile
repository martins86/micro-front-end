## !/usr/bin/env node
FROM nginx

## substituindo arquivo ngixn.conf
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
