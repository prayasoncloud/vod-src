FROM node:22-alpine

WORKDIR /app

copy package*.json .

RUN npm install 

COPY  src ./src

EXPOSE 3000

CMD ["npm" , "start"]