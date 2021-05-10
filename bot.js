console.log("Code start");
require('dotenv').config({path: __dirname + '/.env'})

const Discord = require("discord.js")
console.log(process.env)
const client = new Discord.Client()
client.login(process.env.BOTTOKEN)

client.on("ready", readyDiscord)

function readyDiscord() {
    console.log("Bot is online")
    client.user.setActivity('pumping lemmas', { type: 'WATCHING' })
}

client.on("message", gotMessage)

const inspireArr = [
    "Plagiarism saves time",
    "Hang in there, retirement is only fifty years away",
    "Aim Low, Reach Your Goals, Avoid Disappointment",
    "Happiness is temporary, death is forever",
    "Some people are like clouds. when they disappear, it’s a beautiful day",
    "Remember, it will only get worse",
    "It's all downhill from here"
]

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}

function gotMessage(msg){
    var message = msg.content.split(" ")
    if(message[0] === "$bonk") {
        msg.reply("🔨 BONK " + msg.content.substring(6) + ", you're going to horny jail 🔨")
    }
    if(message[0] === "$trash") {
        msg.reply("🗑️ " + msg.content.substring(7) + " is TRASH 🗑️")
    }

    if(message[0] === "$inspire") {
        msg.reply("🌸 " + inspireArr[randomNumber(0, inspireArr.length)] + " 🌸")
    }

    if(message[0] === "$pakyu") {
        msg.reply("🖕 " + msg.content.substring(7) + " 🖕")
    }

    if(message[0] === "$bonkbot") {
        msg.reply("Tangina mo")
    }
    if(message[0] === "$enlighten") {
        msg.reply("Mas marami kang free time pag wala kang org")
    }
    if(message[0] === "$tu") {
        msg.reply("Adik")
    }
}