FROM node:26.13-slim

ENV BACKEND_URL='http://0.0.0.0:5000'

COPY package*.json ./

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT [ "npm" ]

CMD [ "start" ]

EXPOSE 3000