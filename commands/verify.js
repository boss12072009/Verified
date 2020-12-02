const Discord = require('discord.js');
var version = '0.9.0'

module.exports = {
    name: 'verify',
    description: "this is a verify command!",
    execute(message, args) {
        let mainrole = message.guild.roles.cache.find(role => role.name === "Verified");

        message.member.roles.add(mainrole.id);
        const verificationEmbed123 = new Discord.MessageEmbed()

            .setColor(0xfcba03)
            .setTitle("Verified")
            .addField('Verified Status', ":white_check_mark: Verified :white_check_mark:")
            .setFooter('Verified')
            .setTimestamp()

        message.member.send(verificationEmbed123)
        message.delete({ timeout: 0000000001 })

    }
}