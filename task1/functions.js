let data = require("./peopleList");

function getUsers(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

function getByUserID(req, res, id) {
    const user = data.find(u => u.id.toString() === id);
    if (user) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('User not found');
    }
}

function updateUser(req, res, id, newData) {
    const userIndex = data.find(u => u.id === id);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(userIndex);

    if (userIndex !== -1) {
        let [field, value] = newData.split('/');
        data[userIndex][field] = value;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data[userIndex]));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('User not found');
    }
}

function deleteUser(req, res, id) {
    data = data.filter(u => u.id !== id);
    data.forEach(u => {
        u.friends = u.friends.filter(friendId => friendId !== id);
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

function createUser(req, res) {
    const newUser = {
        id: 1+ data.length,
        firstName: 'Volodymyr',
        lastName: 'Klitchko',
        status: 'pending',
        friends: []
    };

    data.push(newUser);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newUser));
}

module.exports = {
    getUsers,
    getByUserID,
    updateUser,
    deleteUser,
    createUser,
}