FROM node:21-alpine 

COPY package.json /app/
COPY src /app/
COPY .env /app/ 

WORKDIR /app

RUN npm install

CMD ["npm", "start"]