const db = require("quick.db")

module.exports = {
    name: "set prefix",
    author: "ferinha",
    servidor: "discord.gg/ferinha",

    run: async(client, message, args) => {

        let ferinha_author = message.author;
        let permissão_ferina = "GERENCIAR SERVIDOR"

        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`❌ | ${ferinha_author} Você não possui a permissão **${permissão_ferina}**.`);
        if (!args[0]) return message.channel.send(`❌ | ${ferinha_author} Qual será o novo prefixo?`);

        let novo_prefixo = args.join("");

        let ferinha = await db.set(`ferinha_prefixo_${message.guild.id}`, novo_prefixo);

        message.channel.send(`✅ | ${ferinha_author} O meu prefixo foi definido para \`${novo_prefixo}\` com sucesso!`)
    }
}