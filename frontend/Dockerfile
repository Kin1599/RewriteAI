FROM node:15.8-alpine3.11 AS build

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

# Копируем собранные статические файлы из предыдущего этапа в образ Nginx
COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80

# Команда запуска Nginx, которая будет запущена при старте контейнера
CMD ["nginx", "-g", "daemon off;"]