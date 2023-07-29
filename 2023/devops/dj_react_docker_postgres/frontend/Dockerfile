FROM node:20-alpine

WORKDIR /code/frontend

COPY ./package.json ./package-lock.json /code/frontend/

RUN npm install

COPY . /code/frontend/

EXPOSE 3000

CMD [ "npm","run","start" ]