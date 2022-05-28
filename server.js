// Import Node.js core module
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => { //create web server!
    const pathName = url.parse(req.url).pathname
    const queryParameters = querystring.parse(url.parse(req.url).query)
    if (req.url === '/'){ //check the URL of the current request!
        fs.readFile('index.html', (err, data) => {
            // set response header!
            res.writeHead(200, {'Content-Type': 'text/html'})

            // set response content!
            res.write(data)
            res.end()
        })

    } else if (pathName === '/api'){
        if('student' in queryParameters){
            if(queryParameters["student"] === userOption){
            res.writeHead(200, {'Content-Type': 'application/json'});
            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];
            winner(userOption, computerChoice)
            }
        }
    } else if (pathName === '/main.js'){
        fs.readFile('/main.js', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();
        });
    }


    function winner (player, computer) {
        let objectToString;
        player = player.toLowerCase()
        computer = computer.toLowerCase()
        if(player === computer){
            objectToString = {
                result : 'Tie'
            }
            res.end(JSON.stringify(objectToString));
        } else if (player === 'rock') {
            if(computer === 'paper'){
                objectToString = {
                    result : 'Computer Won'
                }
                res.end(JSON.stringify(objectToString));
            } else {
                objectToString = {
                    result : 'Player Won'
                }
                res.end(JSON.stringify(objectToString));
            }
        } else if (player === 'scissor') {
            if(computer === 'rock'){
                objectToString = {
                    result : 'Computer Won'
                }
                res.end(JSON.stringify(objectToString));
            } else {
                objectToString = {
                    result : 'Player Won'
                }
                res.end(JSON.stringify(objectToString));
            }
        } else if (player === 'paper') {
            if(computer === 'scissor'){
                objectToString = {
                    result : 'Computer Won'
                }
                res.end(JSON.stringify(objectToString));
            } else {
                objectToString = {
                    result : 'Player Won'
                }
                res.end(JSON.stringify(objectToString));
            }
        }
    }
})

server.listen(8000);




