const Discord = require("discord.js")

module.exports = {
    name: "bug",
    author: "ferinha",
    servidor: "https://discord.gg/PEdmSZzCAv",

    run: async(client, message, args) => {
        let ferinha_canal_de_sugestao = client.channels.cache.get("854179641668141077"); //ID DO CANAL DE SUGESTÕES
        let ferinha_author = message.author;
        let ferinha_author_tag = message.author.tag;
        let ferinha_author_avatar = message.author.avatarURL({ dynamic: true, format: "png", size: 1024 });
        let ferinha_sugest = args.join(" ");
        let ferinha_args0 = args[0];
        let ferinha_err_sem_msg = "Escreva sua sugestão após o comando.";

        if (!ferinha_args0) return message.channel.send(`:x: | ${ferinha_author} ${ferinha_err_sem_msg}`)

        let = ferinha_msg_boa = `✅ | ${ferinha_author} Sua sugestão foi enviada para ${ferinha_canal_de_sugestao} com sucesso.`;

        message.channel.send(ferinha_msg_boa)

        let ferinha_msg_embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`Sugestão por: ${ferinha_author_tag}`, ferinha_author_avatar)
        .setDescription(ferinha_sugest)

        ferinha_canal_de_sugestao.send(ferinha_msg_embed).then(msg => {
            let ferinha_emoji_positivo = "✅";
            let ferinha_emoji_negaivo = "❌";
            msg.react(ferinha_emoji_positivo)
            msg.react(ferinha_emoji_negaivo)
        })

    }
}