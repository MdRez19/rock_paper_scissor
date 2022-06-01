// Import Node.js core module
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

//create web server!!
const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url).pathname;
  const queryParameter = querystring.parse(url.parse(req.url).query);
  console.log(pathName);

  //check the URL of the current request!
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      // set response header!
      res.writeHead(200, { 'Content-Type': 'text/html' });
      // set response content!
      res.write(data);
      res.end();
    });
  } else if (pathName === '/api') {
    if ('student' in queryParameter) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      let computerOption = '';
      const choiceNumber = Math.floor(Math.random() * 3 + 1);
      if (choiceNumber === 1) {
        computerOption = 'rock';
      } else if (choiceNumber === 2) {
        computerOption = 'paper';
      } else if (choiceNumber === 3) {
        computerOption = 'scissor';
      }
      res.writeHead(200, {'Content-Type': 'application/json'});
      const objectToString = {
        result: computerOption,
        img: `img/${computerOption}.png`
      };
      res.end(JSON.stringify(objectToString));
    }
  } else if (pathName === '/css/styles.css') {
    fs.readFile('js/styles.cc', function (err, data){
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  } else if (pathName === '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else if (pathName === '/img/rock.png') {
    fs.readFile('img/rock.png', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.write(data);
      res.end();
    });
  } else if (pathName === '/img/paper.png') {
    fs.readFile('img/paper.png', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.write(data);
      res.end();
    });
  } else if (pathName === '/img/scissor.png') {
    fs.readFile('img/scissor.png', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
