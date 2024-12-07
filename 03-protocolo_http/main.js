import http from "http";

http.createServer((req, res) => {
    res.end("Hello world! Welcome to my website");
}).listen(8081);

console.log("O servidor está rodando!");