const Discord = require("quick.db");
const db = require("quick.db");

module.exports = {
    name: "set autorole",
    author: "ferinha",

    run: async(client, message, args) => {
        let ferinha_user = message.author;
        let msg_ferinha_error = "Lembre-se de mencionar um cargo";
        let msg_ferinha_completo_error = `:x: ${ferinha_user} ${msg_ferinha_error}.`;
        if (!args[0]) return message.channel.send(msg_ferinha_completo_error)

        let ferinha_autorole_cargo = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);

        db.set(`ferinha_autorole_${message.guild.id}`, ferinha_autorole_cargo.id);

        let msg_ferinha_confirmação = `✅ | ${ferinha_user} O cargo [${ferinha_autorole_cargo}] foi definido como autorole com sucesso!`;

        message.channel.send(msg_ferinha_confirmação)

    }
}