FROM node:8.9.3-alpine

RUN apk update
RUN apk add nodejs
RUN apk add nodejs-npm  
RUN apk add git
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install --silent
EXPOSE 9000

CMD ["npm", "start"]