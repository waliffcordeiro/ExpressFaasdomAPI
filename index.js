const express = require('express');
const factors = require('./functions/factors')
const latency = require('./functions/latency');
const matrix = require('./functions/matrix')
const filesystem = require('./functions/filesystem')

const server = express();

server.get('/', (req, res) => {
    res.send(`Possíveis rotas:<br><br>Latency<br>Factors<br>Matrix<br>Filesystem`)
});

server.get('/factors', (req,res) => factors.node_factors(req, res));
server.get('/latency', (req,res) => latency.node_latency(req, res));
server.get('/matrix', (req,res) => matrix.node_matrix(req, res));
server.get('/filesystem', (req,res) => filesystem.node_filesystem(req, res));

server.listen(3030);