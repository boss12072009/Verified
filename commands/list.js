const Discord = require('discord.js');
var version = '0.9.0'

module.exports = {
    name: 'list',
    description: "this is a list command!",
    execute(message, args) {
        const list = new Discord.MessageEmbed()
            .setColor(0xffcd05)
            .setTitle('Command List')
            .setThumbnail(message.author.setAuthor)
            .addField('This is the list of the commands for the bot', 'for any questions create a ticket in #tickets')
            .addField('```Help```', '```Sends the member a help embed```')
            .addField('```Cal```', '```Is a calculator command```')
            .addField('```Hello```', '```Hello```')
            .addField('```Hello```', '```Hello```')
            .addField('```Hello```', '```Hello```')
            .addField('```Hello```', '```Hello```')
            .addField('```Hello```', '```Hello```')
            .addField('```Hello```', '```Hello```')
            .addField('Bot version', version)
            .setAuthor(message.author.username)
            .setTimestamp()
        message.member.send(list);
    }
}