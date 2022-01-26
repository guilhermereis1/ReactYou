FROM node

WORKDIR /app

COPY package.json .

RUN npm install react-scripts@3.4.3 -g

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]