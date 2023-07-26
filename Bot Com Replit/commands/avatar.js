const Discord = require("discord.js"); 

module.exports = {
  name: "avatar",
  //veja a foto de alguém

  run : async (client, message, args) => {
  
  let fulano = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  let msg = new Discord.MessageEmbed() 
    .setColor(`FF0000`) 
    .setTitle(fulano.tag) 
    .setImage(fulano.avatarURL({ dynamic: true, format: "png", size: 1024 })) 
    .setFooter(`Comando requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(msg);


  }

}