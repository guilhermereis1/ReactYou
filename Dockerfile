FROM node

WORKDIR /app

RUN mkdir -p /app/node_modules

RUN chown -R node:node /app/node_modules

COPY package.json .

RUN npm install react-scripts@3.4.3 -g

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]