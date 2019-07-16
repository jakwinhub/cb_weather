const AssistantV1 = require('ibm-watson/assistant/v1');
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
  
module.exports = {
    MsgToWatson: async function (lineText) {
        var obj = await new Promise(function (resolve, reject) {
            service.message({
                workspace_id: 'b0922859-da11-4a7c-b549-98e07996b195',
                input: {'text': lineText}
                })
                .then(res => {
                    //console.log("2");
                  //console.log(JSON.stringify(res, null, 2));
                  let ret = JSON.stringify(res, null, 4);
                  console.log (ret);
                  resolve(res.output.text[0]);
                })
                .catch(err => {
                    //console.log("3");
                  //console.log(err)
                  reject('Error while performing Query.');
                });
        });
        return obj;
    }
}