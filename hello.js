console.log('starting app');

const fs = require('fs');
const os = require('os');

fs.appendFile('greetings.txt', 'Hello world!' + os.username, (err) => {
    if (err) {
        console.log('Unable to write to file');
    }
});


