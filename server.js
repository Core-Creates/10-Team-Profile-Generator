const fs = require('fs');
const path = require('path');
const http = require('http');

const readline = require("readline");



http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write(err);
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);

fs.writeFile('teamMates.html', function (err) {
    if (err) throw err;
    console.log('Created!');
    
});


const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userInput.question("How Many people are on your team? ", function (teamNumber) {
    for (let i = 1; i <= teamNumber; i++) {
        userInput.question("What is your name ? ", function (name) {
            userInput.question("What is your email ? ", function (email) {
                userInput.question("What is your Office Number? ", function (officeNum) {
                    userInput.question("What is your github?", function (github) {
                        userInput.question("What school do you attend? ", function (school) {
                            userInput.close();
                        });
                    });
                });
            });
        });
    }
});

userInput.on("close", function() {
    process.exit(0);
});