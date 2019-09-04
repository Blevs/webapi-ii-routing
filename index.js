const express = require('express');
const postsRouter = require('./posts/postsRouter.js');

const server = express();
server.use(express.json());

server.use('/api/posts', postsRouter);

server.listen(4444, () => console.log("server on 4444"));
