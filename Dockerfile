FROM node:dubnium-alpine3.11
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm build
EXPOSE 3000
CMD ["npm", "run"]
