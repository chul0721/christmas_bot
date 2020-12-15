const Discord = require('discord.js')
module.exports = {
  name: 'ping',
  aliases: ['핑', '지연시간', 'latency'],
  description: '현재 봇의 핑을 보여줘요.',
  usage: '<c!ping>',
  run: async (client, message, args, ops) => {
    const embed = new Discord.MessageEmbed()
      .setTitle('Pinging...')
      .setColor('RANDOM')
      .setTimestamp()
    const m = await message.channel.send({
      embed: embed
    })
    embed.setTitle('PONG!')
      .setColor('RANDOM')
      .setTimestamp()
      .addField('Latency', `${m.createdAt - message.createdAt}ms`)
      .addField('API Latency', `${client.ws.ping}ms`)
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setThumbnail('https://i.imgur.com/1Gk4tOj.png')
    m.edit({
      embed: embed
    })
  }
}
