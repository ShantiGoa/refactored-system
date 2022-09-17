const telebot = require("telebot")

const chatBot = new telebot("5429085859:AAGCLNjJdKGrp9V-nx2RBtZhYixP2y7k6cA")

chatBot.on('text', (msg) => msg.reply.text(msg.text));

chatBot.start();