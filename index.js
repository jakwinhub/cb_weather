/*
let request = require('request');

let apiKey = 'f443b6d00ebe5194a041b72dca707ff0';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`



request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
*/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Watson> '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log('${line.trim()}');
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});const AssistantV1 = require('ibm-watson/assistant/v1');

const service = new AssistantV1(
{
  version: '2019-02-28',
  //iam_apikey: 'YAzNj8SfDNMKsgddvaLPFpRCPpqWH0GN1Er2jN2lqp5f',
  username: 'apikey',
  password: 'YAzNj8SfDNMKsgddvaLPFpRCPpqWH0GN1Er2jN2lqp5f',
  url: 'https://gateway-fra.watsonplatform.net/assistant/api'
 // workspace_id: 'b0922859-da11-4a7c-b549-98e07996b195'
}
);
service.message({
    workspace_id: 'b0922859-da11-4a7c-b549-98e07996b195',
    input: {'text': 'Hello'}
    })
    .then(res => {
      //console.log(JSON.stringify(res, null, 2));
      let ret = JSON.stringify(res, null, 2);
      console.log (res.intents[0].intent);
    })
    .catch(err => {
      console.log(err)
    });