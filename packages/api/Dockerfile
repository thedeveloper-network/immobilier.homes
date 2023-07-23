FROM node:alpine
# Create app directory
WORKDIR /usr/src/app

COPY ./dist/packages/api .
RUN npm install
EXPOSE 8080
CMD [ "node", "main.js" ]