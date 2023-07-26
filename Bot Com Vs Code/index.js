const Discord = require("discord.js"); 
const client = new Discord.Client({partials: ["MEMBER", "MESSAGE", "CHANNEL", "USER", "REACTION"]});
const config = require("./config.json");
const db = require("quick.db");
const enmap = require('enmap');
const {token, prefix} = require('./config.json');

const settings = new enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
});


client.interaction = {}; 
const DiscordButtons = require('discord-buttons'); 
const ButtonPages = require('discord-button-pages'); //Clique o F12 aqui, caso queira personalizar a mensagem de FINALIZAÇÃO! Linha 55
DiscordButtons(client);


client.on('clickButton', (button) => {
  ButtonPages.buttonInteractions(button, client.interaction);
});

client.on('message', msg => {
  let ferinha_prefixo = config.prefix;
  let ferinha_author = msg.author;
  let ferinha_author_tag = msg.author.tag;

  let ferinha_nome_do_bot = client.user.username;
  let ferinha_bot = client.user;

  let ferinha_avatar = ferinha_author.displayAvatarURL({ dynamic: true });
  let ferinha_bot_avatar = ferinha_bot.displayAvatarURL({ dynamic: true });

  let ferinha_botões = `**Botões:** **[**\`⏩ Próximo\`**], [**\`⏪ Anterior\`**], [**\`❌ Fechar Painel\`**]**`;

  if (msg.author.bot) return;
  if (msg.content === `${ferinha_prefixo}help`) { //Coloquem o nome do comando aqui!

    const ferinha_1 = new Discord.MessageEmbed()
        .setTitle('Painel de ajuda')
        .setDescription(`**Olá ${ferinha_author}, eu sou o __${ferinha_nome_do_bot}__!\nVeja meus comandos clicando nos botões abaixo:**\n\n${ferinha_botões}\n`)
        .setThumbnail(ferinha_avatar)
        .setFooter(`Página [1/4]`, ferinha_bot_avatar)
        .setColor('RANDOM');
        
    const ferinha_2 = new Discord.MessageEmbed()
       .setTitle('Comandos de Administração')
       .setDescription(`**Olá ${ferinha_author}, veja meus comandos de \`ADMINISTRAÇÃO\` abaixo:**\n\n||\`ESCREVA SEUS COMANDOS DE ADMINISTRAÇÃO AQUI\`||\n\n${ferinha_botões}\n`)
       .setThumbnail(ferinha_avatar)
       .setFooter(`Página [2/4]`, ferinha_bot_avatar)
       .setColor('RANDOM');
        
    const ferinha_3 = new Discord.MessageEmbed()
       .setTitle('Comandos de Utilidade')
       .setDescription(`**Olá ${ferinha_author}, veja meus comandos de \`UTILIDADE\` abaixo:**\n\n||\`ESCREVA SEUS COMANDOS DE UTILIDADE AQUI\`||\n\n${ferinha_botões}\n`)
       .setThumbnail(ferinha_avatar)
       .setFooter(`Página [3/4]`,ferinha_bot_avatar)
       .setColor('RANDOM');

    const ferinha_4 = new Discord.MessageEmbed()
       .setTitle('Comandos de Diversão')
       .setDescription(`**Olá ${ferinha_author}, veja meus comandos de \`DIVERSÃO\` abaixo:**\n\n||\`ESCREVA SEUS COMANDOS DE DIVERSÃO AQUI\`||\n\n${ferinha_botões}\n`)
       .setThumbnail(ferinha_avatar)
       .setFooter(`Página [4/4]`, ferinha_bot_avatar)
       .setColor('RANDOM');
    
    const embedPages = [ferinha_1, ferinha_2, ferinha_3, ferinha_4];
    ButtonPages.createPages(client.interaction, msg, embedPages, 60 * 1000, "blurple", "⏩", "⏪", "❌");
  }
});



client.on("messageDelete", async (message) => {

  let ferinha_canal = db.get(`ferinha_msg_del_${message.guild.id}`);
  if (!ferinha_canal === null) return;

  if (message.author.bot) return;

  let ferinha_author = message.author;
  let ferinha_canal_2 = message.channel;
  let ferinha_msg_del = message.content;

  let ferinha_msg_embed = new Discord.MessageEmbed()
  .setTitle(`🗑 Mensagem excluída`)
  .setColor("RANDOM")
  .addFields(
    {
      name: `Autor da mensagem`,
      value: ferinha_author,
      inline: false
    },
    {
      name: `Canal`,
      value: ferinha_canal_2,
      inline: false
    },
    {
      name: `Mensagem`,
      value: `\`\`\`${ferinha_msg_del}\`\`\``,
      inline: false
    }
  )
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp()
  .setFooter(message.guild.name, message.guild.iconURL());

  client.channels.cache.get(ferinha_canal).send(ferinha_msg_embed)
});

client.on("messageUpdate", async (message, oldMessage) => {
  let ferinha_canal = db.get(`ferinha_msg_edit_${message.guild.id}`);
  if (!ferinha_canal === null) return;

  if (message.author.bot) return;

  let ferinha_author = message.author;
  let ferinha_canal_2 = message.channel;
  let ferinha_msg_antiga = message.content;
  let ferinha_msg_editada = oldMessage.content;

  let ferinha_embed = new Discord.MessageEmbed()
  .setTitle(`📝 Mensagem editada`)
  .setColor("RANDOM")
  .addFields(
    {
      name: `Autor da mensagem`,
      value: ferinha_author,
      inline: false
    },
    {
      name: `Canal`,
      value: ferinha_canal_2,
      inline: false
    },
    {
      name: `Mensagem antiga`,
      value: `\`\`\`${ferinha_msg_antiga}\`\`\``,
      inline: false
    },
    {
      name: `Mensagem editada`,
      value: `\`\`\`${ferinha_msg_editada}\`\`\``,
      inline: false
    }
  )
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp()
  .setFooter(message.guild.name, message.guild.iconURL());

  client.channels.cache.get(ferinha_canal).send(ferinha_embed)
});

client.on("guildMemberAdd",  async (member) => {
  let ferinha_autorole = db.get(`ferinha_autorole_${member.guild.id}`);
  if (!ferinha_autorole === null) return;
  member.roles.add(ferinha_autorole)
});

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    //const "https://discord.gg/PEdmSZzCAv";

    const fera = message.content.slice(prefix.length).trim().split(/ +/g);
    const ferinha/*https://discord.gg/PEdmSZzCAv*/ = fera.shift().toLowerCase();
    const feraemoji = "🎫";

    if(ferinha/*https://discord.gg/PEdmSZzCAv*/ == "ticket-setup") {
        // ticket-setup #canal

        let feraa = message.mentions.channels.first();
        if(!feraa) return message.reply("`vs!ticket-setup #canal`");

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
});

client.on('messageReactionAdd', async (reaction, user) => {
  const feraemoji = "🎫";
    if(user.partial) await user.fetch();
    if(reaction.partial) await reaction.fetch();
    if(reaction.message.partial) await reaction.message.fetch();

    if(user.bot) return;

    let feraa = await settings.get(`${reaction.message.guild.id}-ticket`);

    if(!feraa) return;

    if(reaction.message.id == feraa && reaction.emoji.name == feraemoji) {
        reaction.users.remove(user);

        reaction.message.guild.channels.create(`ticket-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async feraa => {
            feraa.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("Boas vindas ao seu ticket").setDescription("[Utilize !close para fechar](https://discord.gg/PEdmSZzCAv)").setColor("RANDOM"));
            
        })
    }
});

client.on("guildMemberAdd", (member) => {
  let ferinha_canal_de_boas_vindas = db.get(`ferinha_boas_vindas_${member.guild.id}`);
  let ferinha_contador = member.guild.memberCount;
  let ferinha_servidor = member.guild.name;

  if (!ferinha_canal_de_boas_vindas) return;

  let msg_embed_ferinha = new Discord.MessageEmbed() //mensagem embed
  .setAuthor(`${member.user.tag}`, member.user.avatarURL())
  .setDescription(`Boas Vindas ${member.user} ao servidor **${ferinha_servidor}**! \nAtualmente estamos com \`${ferinha_contador}\` membros!`)
  .setColor("RANDOM")
  .setThumbnail(member.user.avatarURL());

  let msg_not_embed_ferinha = `Boas Vindas ${member.user}! \nAtualmente estamos com \`${ferinha_contador}\` membros!`; //mensagem não embed

  client.channels.cache.get(ferinha_canal_de_boas_vindas).send(msg_embed_ferinha)
});


client.on("guildMemberRemove", (member) => {
  let ferinha_canal_de_saida = db.get(`ferinha_saída_${member.guild.id}`);
  let ferinha_contador = member.guild.memberCount;

  if (!ferinha_canal_de_saida) return;

  let msg_embed_ferinha = new Discord.MessageEmbed() //mensagem embed
  .setAuthor(`${member.user.tag}`, member.user.avatarURL())
  .setDescription(`O usuário ${member.user} saiu do servidor! \nAtualmente estamos com \`${ferinha_contador}\` membros!`)
  .setColor("RANDOM")
  .setThumbnail(member.user.avatarURL());

  let msg_not_embed_ferinha = `O usuário ${member.user} saiu do servidor! \nAtualmente estamos com \`${ferinha_contador}\` membros!`; //mensagem não embed

  client.channels.cache.get(ferinha_canal_de_saida).send(msg_embed_ferinha)
});



client.on("messageReactionAdd", async(reaction, user) => {

 let ferinha_cargo = "844756968853078017";
 let fera_emoji = "😎";
 let ferinha_msg = "844758604611190874";

  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch;
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.id === ferinha_msg){
    if(reaction.emoji.name === fera_emoji) {
      await reaction.message.guild.members.cache.get(user.id).roles.add(ferinha_cargo)
    }
  }
});

client.on('messageReactionRemove', async(reaction, user) => {

 let ferinha_cargo = "844756968853078017"; //coloque o ID do cargo entre as ""
 let fera_emoji = "😎";
 let ferinha_msg = "844758604611190874";

 if (reaction.message.partial) await reaction.message.fetch();
 if (reaction.partial) await reaction.fetch;
 if (user.bot) return;
 if (!reaction.message.guild) return;
 if (reaction.message.id === ferinha_msg){
   if(reaction.emoji.name === fera_emoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.remove(ferinha_cargo)
      }
  }
});







client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == 'ferinha')
  return
  if(message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
  return message.channel.send(`🔮 | Olá ${message.author}, veja meus comandos com \`${config.prefix}help\`!`)
  }
  }); 


  client.on("ready", () => {
    let ferinha = [
        `Atualmente em ${client.guilds.cache.size} servidores`,
        `Peça ajuda com: ${config.prefix}help`,
        `Gerenciando ${client.users.cache.size} pessoas`
      ],
      fera = 0;
    setInterval( () => client.user.setActivity(`${ferinha[fera++ % ferinha.length]}`, {
          type: "PLAYING" //mais tipos: WATCHING / LISTENING
        }), 1000 * 30); 
    client.user
        .setStatus("online")
        .catch(console.error);
  console.log("Estou pronto(a) para ser utilizado(a)!")
  });






client.login(config.token); 


client.on('message', message => {

  let prefixo_fera = db.get(`ferinha_prefixo_${message.guild.id}`);
  if (!prefixo_fera) prefixo_fera = config.prefix;

  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(prefixo_fera.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

 const args = message.content
     .trim().slice(prefixo_fera.length)
     .split(/ +/g);
 const command = args.shift().toLowerCase();

 try {
     const commandFile = require(`./commands/${command}.js`)
     commandFile.run(client, message, args);
 } catch (err) {

   let emoji_fera = "❌";
   let ferinha_author = message.author;
   let prefixo_fera_handler = prefixo_fera;
   let comando_inexistente = `${prefixo_fera_handler}${command}`;

   message.channel.send(`${emoji_fera} | ${ferinha_author} O comando \`${comando_inexistente}\` não existe!`).then(msg=>{msg.delete({timeout:5000})});

 console.error('Erro:' + err);
}
});

