const http = require('http');
const userFunctions = require('./functions');

const server = http.createServer((req, res) => {
    const urlParts = req.url.split('/');

    switch (req.method) {
        case 'GET':
            if (urlParts[1] === 'users') {
                if (urlParts.length === 2) {
                    userFunctions.getUsers(req, res);
                    //curl http://localhost:3000/users
                } else {
                    userFunctions.getByUserID(req, res, urlParts[2]);
                    //curl http://localhost:3000/users/1
                }
            }
            break;

        case 'POST':
            if (urlParts[1] === 'users') {
                userFunctions.createUser(req, res);
                // curl -X POST -H "Content-Type: application/json" -d '{"firstName":"Vitalii", "lastName":"Klitchko", "status":"active", "friends":[]}' http://localhost:3000/users
            }
            break;

        case 'PUT':
            if (urlParts[1] === 'users' && urlParts.length === 3) {
                userFunctions.updateUser(req, res, urlParts[2]);
                // curl -X PUT -H "Content-Type: application/json" -d '{"firstName":"Volodymyr"}' http://localhost:3000/users/1
            }
            break;

        case 'DELETE':
            if (urlParts[1] === 'users' && urlParts.length === 3) {
                userFunctions.deleteUser(req, res, urlParts[2]);
                // curl -X DELETE http://localhost:3000/users/1
            }
            break;

        default:
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Content not added');
            break;
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
