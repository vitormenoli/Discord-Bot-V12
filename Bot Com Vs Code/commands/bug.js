const Discord = require("discord.js")

module.exports = {
    name: "bug",
    author: "ferinha",
    servidor: "https://discord.gg/PEdmSZzCAv",

    run: async(client, message, args) => {
        let ferinha_canal_de_bugs = client.channels.cache.get("854169119061835846"); //ID DO CANAL DE BUGS
        let ferinha_bug_msg = args.join(" ");
        let ferinha_author = message.author;
        let ferinha_cade_a_msg = "Escreva o bug encontrado após o comando"

        if (!ferinha_bug_msg) return message.channel.send(`:x: | ${ferinha_author} ${ferinha_cade_a_msg}!`)

        let ferinha_author_tag = message.author.tag;
        let ferinha_author_id = message.author.id;
        let ferinha_servidor_nome = message.guild.name;
        let ferinha_servidor_id = message.guild.id;

        let ferinha_msg = new Discord.MessageEmbed()
        .setTitle(`💩 BUG REPORTADO`)
        .setColor("RANDOM")
        .setDescription(`\`✏ Usuário:\` ${ferinha_author}\n\`✏ Usuário TAG e ID:\` ${ferinha_author_tag} - ${ferinha_author_id}\n\`✏ Servidor:\` ${ferinha_servidor_nome}\n\`✏ Servidor ID:\` ${ferinha_servidor_id}
\`⛔ BUG:\` ${ferinha_bug_msg}`);


       ferinha_canal_de_bugs.send(ferinha_msg)
       let ferinha_msg_bugs_enviado_com_sucesso = "O bug foi reportado para meu servidor suporte com sucesso!"
       message.channel.send(`✅ | ${ferinha_author} ${ferinha_msg_bugs_enviado_com_sucesso}\nhttps://discord.gg/WdTcP5tB`)
    }
}