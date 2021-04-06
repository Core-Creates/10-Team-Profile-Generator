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

var fileName = 'teamMates.html';

fs.writeFile(fileName,
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teammates</title>
</head>

<body>`,
    function (err) {
        if (err) throw err;
        console.log('Created!');
    });


const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userInput.question("How Many people are on your team? ", function (teamNumber) {

    // userInput.next(teamNumber);
    for (let i = 0; i < teamNumber; i++) {
        fs.appendFile(fileName, "<div>", function () { });

        userInput.question("What is your name ? ", function (name) {
            // userInput.next(name);
            fs.appendFile(fileName, "<h4>" + name + "</h4>", function () { });

            userInput.question("What is your email ? ", function (email) {



                userInput.question("What is your Office Number? ", function (officeNum) {


                    userInput.question("What is your github?", function (github) {


                        userInput.question("What school do you attend? ", function (school) {
                            console.log(
                                `your name is ${name}, 
                            your email is ${email}, 
                            your office number is ${officeNum},
                            your github is ${github},
                            your school is ${school}`)

                            userInput.close();
                        });

                    });
                });
            });
        });
        fs.appendFile(fileName, "</div>", function () { });
    }

});

userInput.on("close", function () {
    // console.log("good bye");
    process.exit(0);
})