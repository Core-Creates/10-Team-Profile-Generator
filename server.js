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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">


</head>

<body>
<nav class="navbar navbar-dark bg-dark" style="height: 100px;"> 
<div class="container-fluid" style="padding: 10px;">
<a class="navbar-brand" href="#" style="font-size: 40px;">Teammate website</a>\n
</div>\n
<nav> \n`,
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
    fs.appendFile(fileName, "\n<div class='card' style='width: 18rem; margin: 40px; padding: 10px;'> \n", function () { });
        fs.appendFile(fileName, '<div class="card-body"> \n', function () { });
    for (let i = 0; i < teamNumber; i++) {

        userInput.question("What is your name ? ", function (name) {
            // userInput.next(name);
            fs.appendFile(fileName, '<h5 class="card-title">' + name + "</h5>\n", function () { });

            userInput.question("What is your email ? ", function (email) {

                fs.appendFile(fileName, '<h6 class="card-subtitle mb-2 text-muted">\n' + email + "</h6>\n", function () { });

                userInput.question("What is your Office Number? ", function (officeNum) {

                    fs.appendFile(fileName, '<p class="card-text">' + officeNum + "</p>\n", function () { });


                    userInput.question("What is your github?", function (github) {
                        fs.appendFile(fileName, '<p class="card-text">' + github + "</p>\n", function () { });


                        userInput.question("What school do you attend? ", function (school) {
                            // console.log(
                            //     `your name is ${name}, 
                            // your email is ${email}, 
                            // your office number is ${officeNum},
                            // your github is ${github},
                            // your school is ${school}`)

                            fs.appendFile(fileName, "    </div>\n" + "  </div>\n" + " </body>\n" + "</html>\n", function () { });

                            userInput.close();
                        });

                    });
                });
            });
        });
        // fs.appendFile(fileName, "</div>", function () { });
        // fs.appendFile(fileName, "</div>", function () { });
    }

});

userInput.on("close", function () {
    // console.log("good bye");
    process.exit(0);
})