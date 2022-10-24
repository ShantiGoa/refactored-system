const menu = {
    getMainMenu: (telebot)=>{
        return telebot.inlineKeyboard([
            [
                telebot.inlineButton(('💾 Лицензия'), {callback: 'license'})
            ],
            [
                telebot.inlineButton(('💡О TeleSpace'), {callback: 'about'})
            ],
            [
                telebot.inlineButton(('🧰 Поддержка'), {callback: 'helpService'})
            ]
        ])                                              
    },
    getTextStartup: `Добро пожаловать в магазин TeleSpace!🛸
📎 Здесь вы можете узнать о программе, получить демо доступ на 3 дня и приобрести подписку.
    
💵 Стоимость основной подписки:
10 000 р. - 3 месяца
4 000 р. - месяц`,
    getTextMenu: `🔘 Ниже в меню есть кнопки.
⚡️ Получить демо доступ на 3 дня можно по кнопке - “Лицензия”
💴 Купить подписку на месяц/3 месяца можно по кнопке "Лицензия"
⚡️ Хотите узнать больше о TeleSpace? Нажмите - “💡О TeleSpace”
⚡️ Есть вопрос? Переходите по кнопке - “Поддержка”
    
Пожалуйста, выберите нужную опцию. ⬇️`
}

module.exports = menu