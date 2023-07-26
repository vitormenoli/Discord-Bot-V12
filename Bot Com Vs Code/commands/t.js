exports.run = async(message, client, args) => {

const fera = args[0];
    const ferinha/*https://discord.gg/PEdmSZzCAv*/ = fera.shift().toLowerCase();
    const feraemoji = "🎫";

  if(ferinha/*https://discord.gg/PEdmSZzCAv*/ == "vs!ticket-reação") {
      // ticket-setup #canal

      let feraa = message.mentions.channels.first();
      if(!feraa) return message.reply("`vs!ticket-reação #canal`");

      let ferinha_zika = await feraa.send(new Discord.MessageEmbed()
          .setTitle("Sistema de ticket")
          .setDescription("[Reaja para abrir um ticket!](https://discord.gg/PEdmSZzCAv)")
          .setFooter("Sistema de ticket por Ferinhha")
          .setColor("RANDOM")
      );

      ferinha_zika.react(feraemoji);
      settings.set(`${message.guild.id}-ticket`, ferinha_zika.id);

      message.channel.send("Sistema de ticket configurado!")
  }

  if(ferinha/*https://discord.gg/PEdmSZzCAv*/ == "close") {
      if(!message.channel.name.includes("ticket-")) return message.channel.send("Você não pode utilizar esse comando aqui!")
      message.channel.delete();
  }
}