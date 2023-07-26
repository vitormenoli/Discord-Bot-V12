const { MessageEmbed } = require("discord.js");
let cor_embed = "FF0000"; // Coloque a cor da embed aqui!

module.exports = {
  name: "queue",

  run: async (client, message, args) => {

if(!message.channel.permissionsFor(client.user.id).has("SEND_MESSAGES")) return message.author.send(`**Estou sem permissão de \`Enviar Mensagens\` neste canal**`)

    const queue = client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(`**Não há musica tocando!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
    

    let currentPage = 0;
    const embeds = generateQueueEmbed(message, queue.songs);
    const queueEmbed = await message.channel.send(`**Pagina Atual ${currentPage + 1}/${embeds.length}**`,
      embeds[currentPage])

    try {
      await queueEmbed.react("⬅️");
      await queueEmbed.react("⏹");
      await queueEmbed.react("➡️");
    } catch (error) {
      console.error(error);
      message.channel.send(error.message).catch(console.error);
    }

    const fera_fera_fera = (reaction, user) =>
      ["⬅️", "⏹", "➡️"].includes(reaction.emoji.name) && message.author.id === user.id;
    const ferinha_tutorial = queueEmbed.createReactionCollector(fera_fera_fera, { time: 60000 });

    ferinha_tutorial.on("collect", async (reaction, user) => {
      try {
        if (reaction.emoji.name === "➡️") {
          if (currentPage < embeds.length - 1) {
            currentPage++;
            queueEmbed.edit(`**Pagina Atual ${currentPage + 1}/${embeds.length}**`,
      embeds[currentPage])
          }
        } else if (reaction.emoji.name === "⬅️") {
          if (currentPage !== 0) {
            --currentPage;
            queueEmbed.edit(`**Pagina Atual ${currentPage + 1}/${embeds.length}**`,
      embeds[currentPage])
          }
        } else {
            ferinha_tutorial.stop();
          reaction.message.reactions.removeAll();
        }
        await reaction.users.remove(message.author.id);
      } catch (error) {
        console.error(error);
        return message.quote(error.message).catch(console.error);
      }
    });
  }
};

function generateQueueEmbed(message, queue) {
  let embeds = [];
  let k = 10;

  for (let i = 0; i < queue.length; i += 10) {
    const current = queue.slice(i, k);
    let j = i;
    k += 10;

    const info = current.map((track) => `${++j} - [${track.title}](${track.url})`).join("\n");

    const embed = new MessageEmbed()
.setTitle("Fila De Musicas")
      .setColor(cor_embed)
      .setDescription(`${info}`)
      .setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL())
      .setTimestamp();
    embeds.push(embed);
  }

  return embeds;
}