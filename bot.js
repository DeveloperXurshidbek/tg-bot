const TelegramBot = require('node-telegram-bot-api')
const config = require('./config/config')
const bot = new TelegramBot(config.BOT_TOKEN, {
    polling: true,
})
const chat_id = msg.chat.id
const msg = 'Axvollaringiz yaxshimi? <a href="tg://user?id=1607457399">Xurshidbek</a>'

bot.getUpdates()


//===================== Sending message ======================

// bot.sendMessage(chat_id, msg, {
//     parse_mode: "HTML",
//     reply_to_message_id: 5
// })


//========================== Forwarding message ========================

// bot.forwardMessage(chat_id, -1001413764138, 7)

//========================== Keyboard buttons =========================

bot.sendMessage(chat_id, `${msg}`, {
    parse_mode: "html",
    reply_markup: {
        keyboard: [
            [
                "Yaxshi"
            ],
            [
                {
                    text: "Send Number",
                    request_contact: true
                }
            ],
            [
                {
                    text: "Send Location",
                    request_location: true
                }
            ]
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
    }

})

bot.on("message", (d) => {
    if (d.text == "Yaxshi") {
        bot.sendMessage(d.chat.id, msg, {
            parse_mode: 'HTML'
        })
    }
})


















//================================== Get bot data ================================================

// bot.getMe().then(d => {
//     console.log(d);
// }).catch(e => {
//     console.log(e.message);
// })

