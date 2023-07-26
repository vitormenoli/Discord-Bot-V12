const Discord = require('discord.js');
 
module.exports.run = async (client, message, args) => {
 
  let registro = {
    equiperegistro: '843208119387291648',
    naoregistrado: '843208420358357023',
    registrado: '843208507280982036',
    logschannel: '843208643540942848',
    masculino: '843208678189695026',
    feminino: '843208777770991628',
    naobinario: '843208860231532624',
    mais18: '843208934138445844',
    menos18: '843208970255990804',
    hetero: '843209028486168607',
    lgbt: '843209075113590785',
    solteiro: '843209120651673620',
    enrolado: '843209173066973185',
    namorando: '843209227723997205',
    casado: '843209289119956992',
    norte: '843209355755126794',
    nordeste: '843209414030917685',
    centrooeste: '843209463468916806',
    sudeste: '843209552681500734',
    sul: '843209615869345852',
    estrangeiro: '843209659803238430',
  };
 
  let page = 1;
  let pages = new Array();
 
  if (!message.member.roles.cache.has(registro.equiperegistro)) return message.channel.send(`:x: | ${message.author} Você não é da esquipe de registro!`);
  message.delete();
  let cargos = [];
  let pv = [];
  let masculino = message.guild.roles.cache.get(registro.masculino)
  let feminino = message.guild.roles.cache.get(registro.feminino)
  let naobinario = message.guild.roles.cache.get(registro.naobinario)
  let menos18 = message.guild.roles.cache.get(registro.menos18)
  let mais18 = message.guild.roles.cache.get(registro.mais18)
  let hetero = message.guild.roles.cache.get(registro.hetero)
  let lgbt = message.guild.roles.cache.get(registro.lgbt)
  let casado = message.guild.roles.cache.get(registro.casado)
  let solteiro = message.guild.roles.cache.get(registro.solteiro)
  let enrolado = message.guild.roles.cache.get(registro.enrolado)
  let namorando = message.guild.roles.cache.get(registro.namorando)
  let sul = message.guild.roles.cache.get(registro.sul)
  let centrooeste = message.guild.roles.cache.get(registro.centrooeste)
  let sudeste = message.guild.roles.cache.get(registro.sudeste)
  let nordeste = message.guild.roles.cache.get(registro.nordeste)
  let norte = message.guild.roles.cache.get(registro.norte)
  let estrangeiro = message.guild.roles.cache.get(registro.estrangeiro)
  let userReg = message.mentions.users.first();
  let member = message.guild.member(userReg);
  if (!userReg) return message.channel.send(`:x: | ${message.author} Mencione um usuário para registrar!`);
 //ferinha
  pages.push({
    description: `**Registrado:** ${userReg}\n**Registrador:** ${message.author}\n\n` +
      `**Qual sua sexualidade?**\n1️⃣ ${masculino}\n2️⃣ ${feminino}\n3️⃣ ${naobinario}\n\n`,
    cargos: [
      masculino,
      feminino,
      naobinario
    ]
  });
  pages.push({
    description: `**Registrado:** ${userReg}\n**Registrador:** ${message.author}\n\n` +
      `**Qual sua idade?**\n1️⃣ ${menos18}\n2️⃣ ${mais18}\n\n`,
    cargos: [
      menos18,
      mais18
    ]
  });
  pages.push({
    description: `**Registrado:** ${userReg}\n**Registrador:** ${message.author}\n\n` +
      `**Qual o seu gênero?**\n1️⃣ ${hetero}\n2️⃣ ${lgbt}\n\n`,
    cargos: [
      hetero,
      lgbt
    ]
  });
  pages.push({
    description: `**Registrado:** ${userReg}\n**Registrador:** ${message.author}\n\n` +
      `**Qual seu estado cívil?**\n1️⃣ ${namorando}\n2️⃣ ${solteiro}\n3️⃣ ${enrolado}\n4️⃣ ${casado}\n\n`,
    cargos: [
      namorando,
      solteiro,
      enrolado,
      casado
    ]
  });
  pages.push({
    description: `**Registrado:** ${userReg}\n**Registrador:** ${message.author}\n\n` +
      `**Qual região você mora?**\n1️⃣ ${norte}\n2️⃣ ${nordeste}\n3️⃣ ${centrooeste}\n4️⃣ ${sudeste}\n5️⃣ ${sul}\n6️⃣ ${estrangeiro}\n\n`,
    cargos: [
      norte,
      nordeste,
      centrooeste,
      sudeste,
      sul
    ]
  });
 //ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha
  const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(pages[page - 1].description)
    .setFooter('Registrador Ferinha ^^');
 
  const embedUser = new Discord.MessageEmbed()
    .setTitle('Você foi registrado(a)!')
    .setColor('RANDOM')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n`+
      `**Cargos recebidos:** ${pv!==''?'nenhum.':pv.join(', ')}`)
    .setFooter(`ID: ${userReg.id}`)
    .setTimestamp();
 
  const embedFinish = new Discord.MessageEmbed()
    .setTitle('Registro efetuado!')
    .setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
      `**Cargos recebidos:** ${pv!==''?'nenhum.':pv.join(', ')}`)
    .setColor('RANDOM')
    .setThumbnail(userReg.displayAvatarURL())
    .setFooter('Registros | ' + message.guild.name)
 
  message.channel.send(embed).then(msg =>
    msg.react('1️⃣').then(r => {
      msg.react('2️⃣');
      msg.react('3️⃣');
      msg.react('4️⃣');
      msg.react('5️⃣');
      msg.react('6️⃣');
      msg.react('7️⃣');
      msg.react('8️⃣');
      msg.react('9️⃣');
      msg.react('➡');
 
      const oneFilter = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id;
      const twoFilter = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === message.author.id;
      const threeFilter = (reaction, user) => reaction.emoji.name === '3️⃣' && user.id === message.author.id;
      const fourFilter = (reaction, user) => reaction.emoji.name === '4️⃣' && user.id === message.author.id;
      const fiveFilter = (reaction, user) => reaction.emoji.name === '5️⃣' && user.id === message.author.id;
      const sixFilter = (reaction, user) => reaction.emoji.name === '6️⃣' && user.id === message.author.id;
      const sevenFilter = (reaction, user) => reaction.emoji.name === '7️⃣' && user.id === message.author.id;
      const eightFilter = (reaction, user) => reaction.emoji.name === '8️⃣' && user.id === message.author.id;
      const nineFilter = (reaction, user) => reaction.emoji.name === '9️⃣' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
 
      const one = msg.createReactionCollector(oneFilter, { time: 60000 });
      const two = msg.createReactionCollector(twoFilter, { time: 60000 });
      const three = msg.createReactionCollector(threeFilter, { time: 60000 });
      const four = msg.createReactionCollector(fourFilter, { time: 60000 });
      const five = msg.createReactionCollector(fiveFilter, { time: 60000 });
      const six = msg.createReactionCollector(sixFilter, { time: 60000 });
      const seven = msg.createReactionCollector(sevenFilter, { time: 60000 });
      const eight = msg.createReactionCollector(eightFilter, { time: 60000 });
      const nine = msg.createReactionCollector(nineFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
 //ferinha//ferinha kkkjkjkj sla :>
      one.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[0]);
        cargos.push(pages[page - 1].cargos[0]);
        pv.push(pages[page - 1].cargos[0].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      two.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[1]);
        cargos.push(pages[page - 1].cargos[1]);
        pv.push(pages[page - 1].cargos[1].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      three.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[2]);
        cargos.push(pages[page - 1].cargos[2]);
        pv.push(pages[page - 1].cargos[2].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      four.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[3]);
        cargos.push(pages[page - 1].cargos[3]);
        pv.push(pages[page - 1].cargos[3].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      five.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[4]);
        cargos.push(pages[page - 1].cargos[4]);
        pv.push(pages[page - 1].cargos[4].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      six.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[5]);
        cargos.push(pages[page - 1].cargos[5]);
        pv.push(pages[page - 1].cargos[5].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      seven.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[6]);
        cargos.push(pages[page - 1].cargos[6]);
        pv.push(pages[page - 1].cargos[6].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      eight.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[7]);
        cargos.push(pages[page - 1].cargos[7]);
        pv.push(pages[page - 1].cargos[7].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      nine.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[8]);
        cargos.push(pages[page - 1].cargos[8]);
        pv.push(pages[page - 1].cargos[8].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      forwards.on('collect', async (r, user) => {
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          user.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
    })
  );
 
}
//ferinha//ferinha//ferinha//ferinha//ferinha
//ferinha//ferinha//ferinha//ferinha//ferinha
//ferinha//ferinha//ferinha//ferinha//ferinha