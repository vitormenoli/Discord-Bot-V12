const Discord = require("discord.js");

module.exports = {
    name: "addbot",
    author: "ferinha",
    servidor: "discord.gg/ferinha",
    
    run: async(client, message, args) => {

let prefixo = "-"; //coloque o prefixo do seu bot

let canal_ferinha = message.guild.channels.cache.find(ch => ch.id === "870027798058770482"); //coloque canal de logs

let msg0 = args[0];
let msg1 = args[1];

let emoji_erro = "❌";
let emoji_certo = "✅";
let emoji_add = "➕";
let cor_embeds = "RANDOM"; //coloque a cor das embeds que o bot enviará
let emoji_bot = "🤖";
let emoji_user = "👤";
let emoji_na_dm = "🗂";

if (!msg0 || !msg1) return message.channel.send(`${emoji_erro} | ${message.author} Adicione um bot com \`${prefixo}addbot <ID_DO_BOT> <PREFIXO>\``);

let embed_do_ferinha = new Discord.MessageEmbed()
.setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
.setThumbnail(message.author.displayAvatarURL())
.setTimestamp()
.setFooter(message.author.tag, message.author.displayAvatarURL())
.setDescription(`${emoji_add} Clique [aqui](https://discord.com/oauth2/authorize?client_id=${msg0}&scope=bot&permissions=0) para adicionar o bot.`)
.setColor(cor_embeds)
.addFields(
  {
    name: `${emoji_bot} Bot-info:`,
    value: `**Bot ID:** \`${msg0}\`
**Bot prefixo:** \`${msg1}\` `,
inline: true
  },
  {
    name: `${emoji_user} User-info:`,
    value: `**User ID:** \`${message.author.id}\`
**User Tag:** \`${message.author.tag}\` `,
inline: true
  }
);


message.delete();


let embed2_do_ferinha = new Discord.MessageEmbed()
.setFooter(`${client.user.username}`, client.user.displayAvatarURL())
.setThumbnail(client.user.displayAvatarURL())
.setTitle(`${emoji_bot} VERIFICAÇÃO DO BOT ${emoji_bot}`)
.setDescription(`Olá \`${message.author.username}\`, seu bot está em verificação!

${emoji_na_dm} Servidor: \`${message.guild.name}\`
${emoji_na_dm} Bot em análise: <@${msg0}> (\`${msg0}\`)`)
.setColor(`${cor_embeds}`)
.setTimestamp();


    canal_ferinha.send(`${message.author}`, embed_do_ferinha).then(msg => {
            msg.react("📰");
            

            let filtro = (reaction, usuario) => reaction.emoji.name === "📰" && usuario.id === message.author.id;
            let coletor = msg.createReactionCollector(filtro, {max: 1});
     
            coletor.on("collect", cp => {
                message.author.send(embed2_do_ferinha);       
        })
    });

message.channel.send(`${emoji_certo} | ${message.author} Seu bot foi enviado: ${canal_ferinha}! `);

    }
}