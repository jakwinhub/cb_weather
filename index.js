const readline = require('readline');
const services = require("./services.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Watson> '
});

rl.prompt();

rl.on('line', (line) => {
    services.MsgToWatson(line.trim()).then((ret) => {
      console.log(ret);
      rl.prompt();
    }).catch(function(err) {
        console.log("err=" + err);
        process.exit();
    });    
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

