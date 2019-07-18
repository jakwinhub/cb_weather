const AssistantV1 = require('ibm-watson/assistant/v1');
const request = require('request');
const weather = require('openweather-apis');

const assistant = new AssistantV1(
    {
      version: '2019-02-28',
      username: 'apikey',
      password: 'YAzNj8SfDNMKsgddvaLPFpRCPpqWH0GN1Er2jN2lqp5f',
      url: 'https://gateway-fra.watsonplatform.net/assistant/api'
    }
);
  
module.exports = {
    MsgToWatson: async function (lineText) {
      console.log("[MsgToWatson]=" + lineText);
        var obj = await new Promise(function (resolve, reject) {
          assistant.message({
                workspace_id: 'b0922859-da11-4a7c-b549-98e07996b195',
                input: {'text': lineText}
                })
                .then(res => {
                  resolve(res);
                })
                .catch(err => {
                  reject('Error while performing Query.');
                });
        });
        return obj;
    },

    GetWeather: async function(location) {
      let city = location;
      let apiKey = 'e6ecf3ed0b52c40acb6d1ce152e87cf7';
      var obj = await new Promise(function (resolve, reject) {
        weather.setLang('en');
        weather.setCity(location);
        weather.setUnits('metric');
        weather.setAPPID(apiKey);
        weather.getTemperature(function(err, temp){
          //console.log(temp);
          resolve(temp);          
        });
      });
      return obj;
    }
}