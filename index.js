const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 3000;

app.use('/assets', express.static(`${__dirname}/site/assets`));

app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/site/index.html`);
});

server.listen(port);

console.log('Server listening on port', port);