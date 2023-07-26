const db = require("quick.db");

module.exports = {
    name: "set saída by ferinha",
    author: "ferinha :))",

    run: async(client, message, args) => {

        let ferinha_author = message.author;
        let ferinha_msg_error_perm = "Você não possui permissão para utilizar este comando.";
        let ferinha_msg_error_ferinha_canal = "Você deve escrever com \`vs!setsaida #canal\`.";
        let ferinha_msg_confirmado = "Canal setado";

        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:x: | ${ferinha_author} ${ferinha_msg_error_perm}`)

        let ferinha_canal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        if(!ferinha_canal) return message.channel.send(`:x: | ${ferinha_author} ${ferinha_msg_error_ferinha_canal}`);

        db.set(`ferinha_saída_${message.guild.id}`, ferinha_canal.id);

        let ferinha_canal_de_saida = db.get(`ferinha_saída_${message.guild.id}`, ferinha_canal.id);

        message.channel.send(`✅ | ${ferinha_author} ${ferinha_msg_confirmado} para <#${ferinha_canal_de_saida}> com sucesso.`)
    }
}