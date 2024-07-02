const http = require('http');


const server = http.createServer((req, res) => {
    if (req.method === "GET") 
;

    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('<h1>Welcome</h1>')
            break;

        case '/api':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify('Greetings from your API'));
            break;

        default:
            res.statusCode = 404;
            res.end('<h1>Does Not Exist</h1>');
            break;
                
  
};
});

const PORT = 3000;
server.listen(PORT, () => {

    console.log(`Server is running at http://localhost:${PORT}/`);
});