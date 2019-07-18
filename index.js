 // I'd like to know what is the weather in stuttgart

const readline = require('readline');
const services = require("./services.js");



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Watson> '
});

rl.prompt();

rl.on('line', (line) => {
  services.MsgToWatson(line.trim()).then((res) => {
    let resText = res.output.text[0];
    /*    
    let ret = JSON.stringify(res, null, 4);
    console.log(ret);
    */
    console.log(resText);
    let entityType = '';
    if(res.entities.length > 0) {
      entityType = res.entities[0].entity;
    } 
    //console.log(res.entities);
    if(entityType === "sys-location" || entityType === "city") {
      let location = res.entities[0].value;
      services.GetWeather(location).then((temp) => {
          console.log("The temp is " + temp);
          rl.prompt();
      });
    } else {
      rl.prompt();
    } 
  }).catch(function(err) {
        console.log("err=" + err);
        process.exit();
  })
  });

 

