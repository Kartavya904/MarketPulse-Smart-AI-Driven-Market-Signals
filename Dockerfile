FROM golang:1.24-alpine
WORKDIR /app
COPY backend/ ./
RUN go mod tidy && go build -o marketpulse
CMD ["./marketpulse"]
