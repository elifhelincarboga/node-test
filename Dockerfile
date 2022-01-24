FROM node:14

WORKDIR /home/node/app

COPY package.json /home/node/app
RUN npm install

COPY . /home/node/app
RUN npm run build

EXPOSE 3000

CMD npm run start