module.exports.run = async(client, message, args) => {
    const ferinha = await message.channel.send(` \`🏓 Pong!\` `);
    ferinha.edit(`
  \`💻 Ping do servidor:\` \`${ferinha.createdTimestamp -
        message.createdTimestamp}ms\`
\`⏰ Ping da API:\` \`${Math.round(
        client.ws.ping
      )}ms\``);
  }