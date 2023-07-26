const scrapeYt = require("scrape-yt")
const ytdl = require("ytdl-core-discord")

module.exports = {
  name: "play",

  run: async (client, message, args) => {

    if(!message.channel.permissionsFor(client.user.id).has("SEND_MESSAGES")) return message.author.send(`**Estou sem permissão de \`Enviar Mensagens\` neste canal**`)
    if(!args[0]) return message.channel.send(`**Me informe um nome ou um url de alguma musica do youtube**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
    let channel = message.member.voice.channel;
    if(!channel) return message.channel.send(`**Entre em um canal de voz primeiro!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
    if(!channel.permissionsFor(client.user.id).has("SPEAK")) return message.quote(`**Estou sem permissão de \`Falar\` neste canal**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
   if(!channel.permissionsFor(client.user.id).has("CONNECT")) return message.channel.send(`**Estou sem permissão de \`Conectar\` neste canal**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
   message.member.voice.channel.join();
   
let musica_nao_encontrada = `:x: **${message.author} Não foi possível encontrar a música solicitada!**`; // Coloque a mensagem de erro quando o bot não encontrar a música
let cor_embed/*ferinha*/= "FF0000";

   try {

    const server = message.client.queue.get(message.guild.id);
    
    let video = await scrapeYt.search(args.join(' '))
    let result = video[0]

    const song = {
        id: result.id,
        title: result.title,
        duration: result.duration,
        thumbnail: result.thumbnail,
        upload: result.uploadDate,
        views: result.viewCount,
        requester: message.author,
        channel: result.channel.name,
        channelurl: result.channel.url
      };

      if (server) {
        server.songs.push(song);
        return message.channel.send({embed: {
description: `**Adicionado a lista [${song.title}](https://youtube.com/watch?v=${song.id})**`,
color: cor_embed
}})
    }
try {
  var date = new Date(0)
    date.setSeconds(song.duration)
    var timeString = date.toISOString().substr(11, 8)
} catch (e) {
  return message.channel.send(`**Um erro aconteceu \`${e}\`**`).then(m => m.delete({timeout: 60000})).catch(a => {})
}

    const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: channel,
        connection: null,
        songs: [],
        loop: false,
        volume: 2,
        playing: true
    };
    message.client.queue.set(message.guild.id, queueConstruct)

    queueConstruct.songs.push(song)

    const play = async song => {
        const queue = message.client.queue.get(message.guild.id);
        if (!song) {
            queue.voiceChannel.leave();
            message.client.queue.delete(message.guild.id);
            message.channel.send(`**Saindo da chamada**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
            return;
        }

        const dispatcher = queue.connection.play(await ytdl(song.id, {
            filter: "audioonly",
            opusEncoded: true,
            highWaterMark: 1 << 25
        }), {
            type: 'opus'
        })
            .on('finish', () => {
                queue.songs.shift();
                play(queue.songs[0]);
            })
            .on('error', error => {
                return queue.textChannel.send(`**Um erro aconteceu ${error}**`)
            });
        dispatcher.setVolumeLogarithmic(queue.volume / 5);
    var msg = await queue.textChannel.send({embed: {
          description: `**Tocando Agora [${song.title}](https://youtube.com/watch?v=${song.id})**`,
          color: cor_embed
        }})
        await msg.react("⏸️")
        await msg.react("▶️")
        await msg.react("⏭️")
        await msg.react("🔇")
        await msg.react("🔊")
        await msg.react("⏹️")

       let filtro = (reaction, user) => user.id !== client.user.id;
       let coletor = msg.createReactionCollector(filtro, {
         time: song.duration > 0 ? song.duration * 1000 : 240000
       })

       coletor.on("collect", (reaction, user) => {
         let member = message.guild.member(user)
         switch (reaction.emoji.name) {
           case "⏸️":
if(!member.voice.channel) return message.channel.send(`**Entre em um canal de voz primeiro!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})

if(message.guild.me.voice.channel !== member.voice.channel) return message.channel.send(`**Entre em meu canal de voz primeiro!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})

    queue.connection.dispatcher.pause()
    return message.channel.send(`**Musica Pausada!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})

           break;
                      case "▶️":
if(!member.voice.channel) return message.channel.send(`**Entre em um canal de voz primeiro!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})

if(message.guild.me.voice.channel !== member.voice.channel) return message.channel.send(`**Entre em meu canal de voz primeiro!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})


         queue.connection.dispatcher.resume()
    message.channel.send(`**Musica Despausada!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
  
           break;
                      case "⏭️":
 if(!member.voice.channel) return message.channel.send(`**Entre em um canal de voz primeiro!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})

if(message.guild.me.voice.channel !== member.voice.channel) return message.channel.send(`**Entre em meu canal de voz primeiro!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})

       if(queue.songs.length !== 0) {
  queue.connection.dispatcher.end()
   return message.channel.send(`**Musica Skipada!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
       }
           break;
                      case "🔇":
 if(!member.voice.channel) return message.channel.send(`**Entre em um canal de voz primeiro!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
            
if(message.guild.me.voice.channel !== member.voice.channel) return message.channel.send(`**Entre em meu canal de voz primeiro!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
   let volume = 0
         
        queue.connection.dispatcher.setVolume(volume / 10);
  queue.volume = volume;
  client.queue.set(message.guild.id, queue);
    message.channel.send(`**Musica Mutada**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
           break;
                     case "🔊":
 if(!member.voice.channel) return message.channel.send(`**Entre em um canal de voz primeiro!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})

       if(message.guild.me.voice.channel !== member.voice.channel) return message.channel.send(`**Entre em meu canal de voz primeiro!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
  
         
      let volum = 8

        queue.connection.dispatcher.setVolume(volum / 10);
  queue.volume = volum;
  client.queue.set(message.guild.id, queue);
    message.channel.send(`**Musica Desmutada**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
  
       
           break;
                      case "⏹️":
 if(!member.voice.channel) return message.channel.send(`**Entre em um canal de voz primeiro!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
                          
    if(message.guild.me.voice.channel !== member.voice.channel) return message.channel.send(`**Entre em meu canal de voz primeiro!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
queue.songs = []
client.queue.set(message.guild.id, queue)
  queue.connection.dispatcher.end();
    message.channel.send(`**Lista de musicas excluida!**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
           break;
         }
       })
       coletor.on("end", () => {
         msg.reactions.removeAll().catch(a => {})
        msg.delete({timeout: 15000}).catch(a => {})
       })
    };


    try {
        const connection = await channel.join();
        queueConstruct.connection = connection;
        play(queueConstruct.songs[0]);
    } catch (error) {
        console.error(`Algum erro ocorreu: ${error}`);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel.send(`**Algum erro aconteceu: \`${error}\`**`).then(mag => mag.delete({timeout: 60000})).catch(a => {})
    }

} catch (err) { message.channel.send(musica_nao_encontrada) }

  }
}