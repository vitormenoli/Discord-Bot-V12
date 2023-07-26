const Discord = require("discord.js");
module.exports = {
  name: "ban",
  //cmd por ferinha (esse cmd bane alg)

  run: async(client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`:x: | ${message.author} Você precisa da permissão **BANIR MEMBROS** para utilizar este comando!`)

        const usu = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "sem motivo";


//-----------------------------------------|
const embed = new Discord.MessageEmbed()
        .setTitle(`🔨 Você está banido!`)
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setDescription(`🔨 Servidor: \`${message.guild.name}\`
🔨 Motivo: ${reason}`)
        .setColor("00001")
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL({dynamic : true}));
//envia msg no pv da pessoa----------------|



        if (!args[0]) return message.channel.send(`:x: | ${message.author} Menciona alguém ou utilize o ID de  alguém para banir!`);

        if(!usu) return message.channel.send(`:x: | ${message.author} Você não mencionou e nem utilizou um ID válido!`);

        if(!usu.bannable) return message.channel.send(`:x: | ${message.author} Ops! Eu não tenho permissão para banir este membro!`);

        const ferinha = new Discord.MessageEmbed()
        .setTitle(`🔨 Banimento!`)
        .setThumbnail(usu.user.displayAvatarURL())
        .setDescription(`🔨 Banido: ${usu.user} (\`${usu.user.id}\`)
🔨 Motivo: \`${reason}\`
🔨 Por: ${message.author} (\`${message.author.id}\`) `)
        .setColor("00001")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL());

        await usu.send(embed);
        await usu.ban({
            reason: reason
        });
        
        
        message.channel.send(ferinha);
    }
}


 