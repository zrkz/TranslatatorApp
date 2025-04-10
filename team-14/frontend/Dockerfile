# FROM nginx:1.21
FROM docker-registry.default.svc:5000/cp-388868/nginx:1.21

EXPOSE 8080/tcp

COPY dist/frontend/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

RUN chmod -R g+w /var/cache && chmod -R g+w /var/log && chmod -R g+w /var/run
RUN chmod g+w -R /etc/nginx/conf.d && chmod g+w -R /usr/share/nginx/html/

CMD [ "nginx", "-g", "daemon off;"]