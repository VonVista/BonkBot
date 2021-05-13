console.log("Code start");
require('dotenv').config({path: __dirname + '/.env'})

const Discord = require("discord.js")
const client = new Discord.Client()
client.login(process.env.BOTTOKEN)

client.on("ready", readyDiscord)

function readyDiscord() {
    console.log("Bot is online")
    client.user.setActivity('$bonkbot', { type: 'PLAYING' })
    demo()
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

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo(){
    let date
    while(true){
        date = new Date()
        // console.log(date.getHours() % 3)
        // console.log(date.getMinutes())

        if(date.getHours() % 3 == 0 && date.getMinutes() == 29)
        for (const [key, value] of Object.entries(claimTimer)) {
            claimTimer[key] = "can"
        }
        await sleep(60000)
    }
}

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}

var claimTimer = {}
var timeReset = false

function gotMessage(msg){
    var message = msg.content.split(" ")
    //console.log(message)

    if(message[0] === "$bonkbot") {
        msg.reply(`🔨 BONK BOT LIST OF COMMANDS 🔨
        **$bonk** -> <$bonk @someone> to send them to horny jail 
        **$trash** -> <$trash @someone> to tell them that they're trash 
        **$inspire** -> receive a random "motivational" quote 
        **$pakyu** -> <$pakyu @someone> to send someone middle fingers 
        **$enlighten** -> receive the answer to life, the universe, and everything 
        
        **MUDAE INTEGRATED COMMANDS** 
        **$claimcheck** -> check if someone have claims 
        `)
    }


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
    if(message[0] === "$enlighten") {
        msg.reply("Mas marami kang free time pag wala kang org")
    }
    if(message[0].substring(0,1) == "$" && message[0].substring(1,2) == "w" && message[0].substring(2,3) != "a" && message[0].substring(2,3) != "l" && message[0].length == 3){
        msg.reply("Muntikan na")
    }
    if(message[0].substring(0,1) == "$" && message[0].substring(1,2) != "w" && message[0].substring(2,3) == "a" && message[0].length == 3){
        msg.reply("Muntikan na")
    }

    if(message[1] == "you" && message[3] == "claim"){
        claimTimer[message[0].substring(0,message[0].length - 1)] = message[2]
    }
    
    if(message[4] == "are" && message[5] == "now" && message[6] == "married!"){
        claimTimer[message[1]] = "can't"
    }
        
    if(message[0] == "$claimcheck"){
        let timerOutput = "Claim status (**Mudae**) of the server\n"
        for (const [key, value] of Object.entries(claimTimer)) {
            console.log(key, value);
            timerOutput += key + ": " + value + "\n"
        }
        msg.reply(timerOutput)
        //msg.reply("Under maintenance")
    }
}