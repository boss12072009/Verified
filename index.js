const Discord = require('discord.js');
const bot = new Discord.Client();
const { token, prefix } = require('./botconfig.json');
const fs = require('fs');
const { type } = require('os');

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command)
}

var version = '0.9.0'

bot.on('ready', () => {
    console.log('Im awake');

    bot.user.setActivity('Verifiying Members', {type: "COMPETING"})
    bot.user.setStatus("dnd")
})

bot.on('message', message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    if (command === 'verify') {
        bot.commands.get('verify').execute(message, args)
    } else if (command === 'list') {
        bot.commands.get('list').execute(message, args)
    } else if (command === 'verified') {
        bot.commands.get('verified').execute(message, args)
    } else if (command === 'howto') {
        bot.commands.get('howto').execute(message, args)
    }
})

bot.login(process.env.token)