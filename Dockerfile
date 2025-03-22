FROM golang:1.24-alpine

WORKDIR /app

RUN go install github.com/air-verse/air@latest

COPY backend/go.mod backend/go.sum ./
RUN go mod download

COPY backend/ ./

EXPOSE 8080

CMD ["air"]
