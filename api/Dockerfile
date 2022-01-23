FROM node:11
WORKDIR /home/node/app
COPY . /home/node/app
RUN npm install
CMD npm run start
CMD npm run build:jslib
EXPOSE 3000