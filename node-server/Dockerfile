FROM node:14.16.0-alpine3.13
WORKDIR /usr/bin/www
COPY ./app/package.json /usr/bin/www/package.json
RUN npm install
CMD ["npm", "run", "dev"]
