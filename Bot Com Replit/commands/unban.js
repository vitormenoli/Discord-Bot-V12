const Discord = require('discord.js')

module.exports = {
    name: "unban",
//desbane umm user (by ferinha)

    run: async(client, message, args) => {

 if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`:x: | ${message.author} Você precisa da permissão **BANIR MEMBROS** para utilizar este comando!`);       
        let usu = args[0];

         if (!usu) return message.channel.send(`:x: | ${message.author} Utilize o ID de alguém para desbanir!`);

        message.guild.members.unban(usu);

        message.channel.send(`✅ | ${message.author}, o usuário <@${usu}> (\`${usu}\`) foi desbanido com sucesso!`)
    }
}