FROM node:8
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install -g angular/cli
COPY . /usr/src/app
#EXPOSE 4200
#CMD ["npm","start"]
RUN ng serve -p 8080