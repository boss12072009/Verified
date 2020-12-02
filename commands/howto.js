const Discord = require('discord.js');
var version = '0.9.0';

module.exports = {
    name: 'howto',
    description: "this is a howto command!",
    execute(message, args) {
        const howto = new Discord.MessageEmbed()
            .setColor(0x21a33f)
            .setTitle('How to get verified')
            .addField('Verified', 'Do >verify in the #verification to get yourself the verified role')
            .addField('Bot Version', version)
        message.channel.send(howto);
        message.member.send('Hello')
    }
}