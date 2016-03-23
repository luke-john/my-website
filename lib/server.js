import Path from 'path';
import {Server} from 'hapi';
import Inert from 'inert';

import getPage from './getPage.js';
import template from '../src/index.tpl.js';

const server = new Server();

server.connection({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8007
});

server.register(Inert, () => {});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => (
    reply(template)
  )
});

server.route({
  method: 'GET',
  path: '/page.{width}x{height}.png',
  handler: getPage
});

server.route({
  method: 'GET',
  path: '/loading.gif',
  handler: (request, reply) => (
    reply.file(Path.resolve('public/loading.gif'))
  )
});

server.route({
  method: 'GET',
  path: '/loadPage.js',
  handler: (request, reply) => (
    reply.file(Path.resolve('public/loadPage.js'))
  )
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
