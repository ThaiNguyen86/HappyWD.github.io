FROM node:20-alpine

WORKDIR /app

# copy toàn bộ code (HTML, CSS, JS)
COPY . .

# cài http-server
RUN npm install -g http-server

# container lắng nghe port 8080
EXPOSE 8080

# chạy http-server, serve thư mục hiện tại
CMD ["http-server", "-p", "8080"]

