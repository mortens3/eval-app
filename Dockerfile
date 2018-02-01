FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

ENV CONTENT_API_URL=http://localhost:3001/api 

ENV APPINSIGHTS_INSTRUMENTATIONKEY=6f6fde25-c558-4045-8728-4c46422381c7

EXPOSE 3000
CMD [ "npm", "start" ]