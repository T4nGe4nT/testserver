const http = require('http');


const server = http.createServer((req, res) => {
    if (req.method === "/") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('<h1>Welcome</h1>');
    } else if (req.method === '/api') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: "API is running" }));
    } else { 
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Does not exist');
    }
});

const PORT = 3000;
server.listen(PORT, () => {

    console.log(`Server is running at http://localhost:${PORT}/`);
})