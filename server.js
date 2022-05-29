// Import Node.js core module
const http = require('http');
const fs = require('fs')
const url = require('url');

//create web server!!
const server = http.createServer((req, res) => {
    const pathName = url.parse(req.url).pathname;
    console.log(pathName)
    if (req.url === '/'){ //check the URL of the current request!
        fs.readFile('index.html', (err, data) => {
            // set response header!
            res.writeHead(200, {'Content-Type': 'text/html'})
            // set response content!
            res.write(data)
            res.end()
        })

    } else if (pathName === '/api'){
            res.writeHead(200, {'Content-Type': 'application/json'});
            let computerOption = ''
            const choiceNumber = Math.floor(Math.random() * 3 + 1);
            if(choiceNumber === 1){
                computerOption = 'rock'
            } else if (choiceNumber === 2){
                computerOption = 'paper'
            } else if (choiceNumber === 3){
                computerOption = 'scissor'
            };
            res.writeHead(200, {'Content-Type': 'application/json'});
            const objectToString = {
                result: computerOption
            }
            res.end(JSON.stringify(objectToString));
    } else if (pathName === '/js/main.js'){
        fs.readFile('js/main.js', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();
        });
    }
})

server.listen(8000);




