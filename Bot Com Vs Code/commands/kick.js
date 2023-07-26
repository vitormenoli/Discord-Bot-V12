const Discord = require("discord.js");
module.exports = {
  name: "kick",
  //cmd por ferinha (esse cmd expulsa alg)

  run: async(client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`:x: | ${message.author} Você precisa da permissão **EXPULSAR MEMBROS** para utilizar este comando!`)

        const usu = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "sem motivo";


//-----------------------------------------|
const embed = new Discord.MessageEmbed()
        .setTitle(`🪓 Você foi expulso!`)
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setDescription(`🪓 Servidor: \`${message.guild.name}\`
🪓 Motivo: ${reason}`)
        .setColor("00001")
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL({dynamic : true}));
//envia msg no pv da pessoa----------------|



        if (!args[0]) return message.channel.send(`:x: | ${message.author} Menciona alguém ou utilize o ID de  alguém para expulsar!`);

        if(!usu) return message.channel.send(`:x: | ${message.author} Você não mencionou e nem utilizou um ID válido!`);

        if(!usu.kickable) return message.channel.send(`:x: | ${message.author} Ops! Eu não tenho permissão para expulsar este membro!`);

        const ferinha = new Discord.MessageEmbed()
        .setTitle(`🪓 Expulsão!`)
        .setThumbnail(usu.user.displayAvatarURL())
        .setDescription(`🪓 Expulso: ${usu.user} (\`${usu.user.id}\`)
🪓 Motivo: \`${reason}\`
🪓 Por: ${message.author} (\`${message.author.id}\`) `)
        .setColor("00001")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL());

        await usu.send(embed);
        await usu.kick({
            reason: reason
        });
        
        
        message.channel.send(ferinha);
    }
}


 