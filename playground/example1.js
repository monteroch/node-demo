const fs = require("fs");
const os = require("os");

var user = os.userInfo();

fs.appendFile('greetings.txt', 'Hello ' + user.username, function (err){
    if (err) {
        console.log('Unable to write to file');
    }
});