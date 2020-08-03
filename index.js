const TelegramBot = require('node-telegram-bot-api'); 
const dialogflow = require('./dialogflow'); //assim a funcao exportada fica visivel
const youtube = require('./youtube');
const token = 'Por questão de segurança retirada Token do TELEGRAM';
  
const bot = new TelegramBot(token, { polling: true});

bot.on('message', async function (msg) {
    const chatId = msg.chat.id;
    console.log(msg.text);
    
    //passo funcao asycrona e chamo a resposta aqui
    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text); //chamo a funcao exportada
      
      let responseText = dfResponse.text;  

    if (dfResponse.intent == 'Treino específico') {
        responseText = await youtube.searchVideoURL(responseText, dfResponse.fields.corpo.stringValue);
    
    }
    
    //bot.sendMessage(chatId, responseText);

    if (dfResponse.intent == 'Compra carrefour') {
          responseText = await youtube.searchVideoURL(responseText, dfResponse.fields.carrinho.stringValue);
    }
    bot.sendMessage(chatId, responseText);
});