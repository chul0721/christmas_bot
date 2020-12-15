const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'date',
  aliases: ['ㅇㅁㅅㄷ', '날짜', 'calendar'],
  description: '크리스마스까지 몇일이 남았는지 보여줘요.',
  usage: '<c!date>',
  run: async (client, message, args, ops) => {
    const curr = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0)
    const chr = new Date(curr.getFullYear(), 11, 25, 0, 0, 0, 0)
    const remms = Date.parse(chr) - Date.parse(curr)
    message.channel.send({
      embed: new MessageEmbed().setTitle('크리스마스까지 남은 날 수').setColor('RANDOM').setDescription(`${remms / 86400000}일`).setFooter(message.author.tag, message.author.displayAvatarURL()).setTimestamp()
    })
  }
}
