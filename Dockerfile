FROM node:16-alpine AS development

ENV NODE_ENV development

WORKDIR /app

COPY  . /app/.

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]