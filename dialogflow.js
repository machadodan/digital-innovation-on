const dialogflow = require('dialogflow');
const configs = require('./digital-innovation-on');

const sessionClient = new dialogflow.SessionsClient({
    projectId: configs.project_id,
    credentials: {
        private_key: configs.private_key,
        client_email: configs.client_email
    }

});

async function sendMessage(chatId, message){
    const sessionPath = sessionClient.sessionPath(configs.project_id, chatId);
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'pt-BR'
            }
        }        
    }
    //aqui trabalhamos em cima das intenções
    //definir qual vai ser a respostale
    const responses = await sessionClient.detectIntent(request);

    //printa primeira resp.
    const result = responses[0].queryResult; 
   // console.log(JSON.stringify(result, null, 2)); 
   return {
       text: result.fulfillmentText,
        intent: result.intent.displayName, 
        fields: result.parameters.fields
    };
};
//exporta modulo dialogflow
module.exports.sendMessage = sendMessage;

