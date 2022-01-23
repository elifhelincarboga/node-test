FROM node:11

WORKDIR /home/node/app

COPY package.json /home/node/app
RUN npm install

COPY . /app
RUN npm run build

EXPOSE 3000

CMD npm run start