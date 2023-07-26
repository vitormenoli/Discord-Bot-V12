const Discord = require("discord.js");
module.exports = {
    name: "clear",
    author: "ferinha",
    servidor: "https://discord.gg/PEdmSZzCAv",


run: async(client, message, args) => {

    let ferinha_author = message.author;
    let ferinha_msg_erro_sem_perm = "Você não possui a permissão \`Gerenciar Mensagens\`";
    let ferinha_numeros = args[0];

  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`:x: | ${ferinha_author} ${ferinha_msg_erro_sem_perm}.`);

  const ferinha_contador_msg_del = parseInt(args[0], 10);

  let ferinha_msg_erro_msgs_del = "Insira um número entre 1-99.";

  if (!ferinha_contador_msg_del || ferinha_contador_msg_del < 1 || ferinha_contador_msg_del > 99) return message.channel.send(`:x: | ${ferinha_author} ${ferinha_msg_erro_msgs_del}`);

  const ferinha_apagando_msg = await message.channel.messages.fetch({
    limit: ferinha_contador_msg_del + 1
  });
  message.channel.bulkDelete(ferinha_apagando_msg);
  let msg_nao_embed = `✅ | ${ferinha_author} apagou \`${ferinha_numeros}\` mensagens!`;
  let msg_embed = new Discord.MessageEmbed() .setColor("RANDOM") .setDescription(`${ferinha_author} apagou \`${ferinha_numeros}\` mensagens!`) .setFooter(`Limpeza realizada`, "http://2.bp.blogspot.com/-dcLYYffAv2w/U1E3Un7Ie1I/AAAAAAAAAAw/uYYS4DWtJBk/s1600/1.gif")
  message.channel.send(msg_embed).then(msg => msg.delete({timeout: 9000}))
}};