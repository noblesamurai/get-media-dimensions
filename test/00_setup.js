const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('dirty-chai'));

const finalhandler = require('finalhandler');
const http = require('http');
const path = require('path');
const serveStatic = require('serve-static');
const serve = serveStatic(path.resolve(__dirname, 'fixtures'));
const server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res));
});

before(async function () {
  const { address, port } = await new Promise((resolve, reject) => {
    server.listen(0, 'localhost', () => resolve(server.address()));
  });
  this.host = `http://${address}:${port}`;
});

after(function () {
  server.close();
});
