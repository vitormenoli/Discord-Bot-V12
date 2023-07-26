const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "set msg del",
    author: "ferinha",

    run: async(client, message, args) => {

        let ferinha_canal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        let ferinha_author = message.author;
        let ferinha_err = "Mencione um canal";

        let ferinha_perm = "**Gerenciar Servidor**";
        let ferinha_msg_error_perm = `:x: | ${ferinha_author} Você não possui de ${ferinha_perm}.`

        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${ferinha_msg_error_perm}`);
        if (!ferinha_canal) return message.channel.send(`:x: | ${ferinha_author} ${ferinha_err}.`);

        db.set(`ferinha_msg_del_${message.guild.id}`, ferinha_canal.id);

        let ferinha_confirm_pt1 = "O canal";
        let ferinha_confirm_pt2 = "foi configurado com sucesso.";
        message.channel.send(`✅ ${ferinha_author} ${ferinha_confirm_pt1} ${ferinha_canal} ${ferinha_confirm_pt2}`)
        
    }
}