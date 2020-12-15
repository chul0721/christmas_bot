const Discord = require('discord.js')
module.exports = {
  name: 'carol',
  aliases: ['music', '음악', '캐롤', '노래'],
  description: '저장된 캐롤 노래를 틀어줘요.',
  usage: '<c!carol> [volume]',
  run: async (client, message, args, ops) => {
    const music = message.content.split(' ')
    const embed = new Discord.MessageEmbed()
      .setTitle('반응을 눌러 원하는 노래를 감상하세요')
      .setColor('RANDOM')
      .addField(':one: 반응', '신나는 캐롤 (1:41:04)')
      .addField(':two: 반응', '옛날 분위기의 캐롤 (1:01:45)')
      .addField(':three: 반응', '잔잔한 캐롤 (1:39:36)')
      .addField(':four: 반응', '최고의 캐롤 모음 (2:56:44)')
      .addField(':five: 반응', '캐롤의 정석 (0:29:58)')
      .addField(':six: 반응', '유명 가수들이 부른 캐롤 모음 (0:58:20)')
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setTimestamp()
    message.channel.send({
      embed: embed
    })
    message.react('1️⃣')
    message.react('2️⃣')
    message.react('3️⃣')
    message.react('4️⃣')
    message.react('5️⃣')
    message.react('6️⃣')
    const filter = (r, u) => u.id === message.author.id && (r.emoji.name === '1️⃣' || r.emoji.name === '2️⃣' || r.emoji.name === '3️⃣' || r.emoji.name === '4️⃣' || r.emoji.name === '5️⃣' || r.emoji.name === '6️⃣')
    const collector = message.createReactionCollector(filter, {
      max: 1
    })
    let name = ''
    const volume = music[1]
    const signal = () => {
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            connection.play(name, { volume: volume })
          })
      } else {
        message.reply('음성 채널에 들어가 주세요.')
      }
    }
    collector.on('end', async collected => {
      switch (collected.first().emoji.name) {
        case '1️⃣':
          name = './music/신나는느낌.mp3'
          signal()
          break
        case '2️⃣':
          name = './music/옛날느낌.mp3'
          signal()
          break
        case '3️⃣':
          name = './music/잔잔한느낌.mp3'
          signal()
          break
        case '4️⃣':
          name = './music/최고의캐롤모음느낌.mp3'
          signal()
          break
        case '5️⃣':
          name = './music/캐롤의정석.mp3'
          signal()
          break
        case '6️⃣':
          name = './music/유명가수캐롤모음.mp3'
          signal()
          break
      }
    })
  }
}
