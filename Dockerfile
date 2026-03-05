# demarer sur le serveur nginx
FROM nginx:alpine

# supprimer les fichiers par defaut du serveur nginx
RUN rm -rf /usr/share/nginx/html/*

# copier les fichiers de l'application dans le serveur nginx
COPY . /usr/share/nginx/html

# exposer le port 90

EXPOSE 90