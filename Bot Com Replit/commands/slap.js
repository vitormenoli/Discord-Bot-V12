const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  var list = [
    'https://i.imgur.com/fm49srQ.gif',
    'https://i.imgur.com/4MQkDKm.gif',
    'https://i.imgur.com/o2SJYUS.gif',
    'https://i.imgur.com/Agwwaj6.gif'
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
  
  if (!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguém para dar um tapa!`);

  let ferinha = new Discord.MessageEmbed()
  .setTitle(`😠 Tapa 😢`)
  .setDescription(`💓 ${message.author} deu um tapa em ${pessoa}!`)
  .setImage(rand)
  .setTimestamp()
  .setColor("YELLOW")
  .setThumbnail(message.author.displayAvatarURL({format:"png"}))
  .setFooter(`Comando feito por: Ferinha :>`, message.author.displayAvatarURL({format:"png"}));

  message.channel.send(ferinha)
  
  }