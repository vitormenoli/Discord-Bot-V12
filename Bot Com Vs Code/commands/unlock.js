module.exports = {
    name: "lock por ferinha",
    author: "ferinha",

    run: async(client, message, args) => {
        let ferinha_perm = message.member.hasPermission("MANAGE_GUILD");
        let ferinha_perm_erro_msg = `:x: | ${message.author} Você não possui a permissão **Gerenciar Servidor**.`;
        if (!ferinha_perm) return message.channel.send(ferinha_perm_erro_msg);

        let ferinha_lock = await message.channel.updateOverwrite(message.guild.roles.cache.find(fera => fera.name.toLowerCase().trim() == "@everyone"),
        {
            SEND_MESSAGES: true
        });
        
        let ferinha_lock_msg = `✅ ${message.author} O canal foi destrancado com sucesso!`

        message.channel.send(ferinha_lock_msg)
    }

}