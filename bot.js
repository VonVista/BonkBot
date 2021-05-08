console.log("Code start");

const Discord = require("discord.js")
const client = new Discord.Client()
client.login("ODQwNTQyMDA2MjkwODA4ODYy.YJZtvg.wmkDvhg698osTjKG5FRRUlIvngg")

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
    console.log(msg.content.substring(0,5))
    if(msg.content.substring(0,5) === "$bonk") {
        msg.reply("🔨 BONK " + msg.content.substring(6) + ", you're going to horny jail 🔨")
    }
    if(msg.content.substring(0,6) === "$trash") {
        msg.reply("🗑️ " + msg.content.substring(7) + " is TRASH 🗑️")
    }

    if(msg.content === "$inspire") {
        msg.reply("🌸 " + inspireArr[randomNumber(0, inspireArr.length)] + " 🌸")
    }

    if(msg.content.substring(0,6) === "$pakyu") {
        msg.reply("🖕 " + msg.content.substring(7) + " 🖕")
    }
}