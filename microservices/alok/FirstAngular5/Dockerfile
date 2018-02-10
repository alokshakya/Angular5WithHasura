FROM node:8
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm cache clean
RUN npm install
COPY . /usr/src/app
EXPOSE 4200
CMD ["npm","start"]

#new docker config#
#FROM node:8
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app
#RUN npm install -g @angular/cli && npm cache clean
#EXPOSE 8080