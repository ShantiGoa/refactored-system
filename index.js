const botApi = require('./connectManager/connectToApi.js')
const mainMenu = require('./Menu/mainMenu.js')


// Command /start
botApi.on('/start', msg => {

    startupMessage = mainMenu.getTextStartup
    messageBeforeMenu = mainMenu.getTextMenu
    replyMarkup = mainMenu.getMainMenu(botApi)
    botApi.sendMessage(msg.from.id, startupMessage)
    botApi.sendMessage(msg.from.id, messageBeforeMenu, {replyMarkup})
    
});

// Button callback
botApi.on('callbackQuery', (msg) => {

    console.log('callbackQuery data:', msg.data);
    botApi.answerCallbackQuery(msg.id);

});

botApi.start();