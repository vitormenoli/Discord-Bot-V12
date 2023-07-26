/*
Utilize no terminal:

npm i @discordjs/opus
npm i scrape-yt
npm i ytdl-core-discord
*/

const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json");

client.queue = new Map();

client.on('ready', async () => {
    console.log(`Loagado em [ ${client.user.username} ] com sucesso!`);
    console.log(`Bot de música (Ferinha)`);
})

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.login(config.token);