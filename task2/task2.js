//curl http://localhost:3000/getSync

// curl http://localhost:3000/getAsync

const http = require('http');
const readFunctions = require('./functions');

const server = http.createServer((req, res) => {
    const filePath = './fah-azimov.html';

    if (req.url === '/getSync') {
        try {
            const data = readFunctions.readSync(filePath);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        } catch (error) {
            res.writeHead(500);
            res.end('Error reading file synchronously');
        }
    } else if (req.url === '/getAsync') {
        readFunctions.readAsync(filePath, (data) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
