module.exports = {
  name: 'leave',
  aliases: ['leave', '중지', 'pause', 'stop'],
  description: '음성 채널에서 나가요',
  usage: '<c!leave>',
  run: async (client, message, args, ops) => {
    if (message.member.voice.channel) {
      message.member.voice.channel.leave()
      message.reply('음악 재생을 중지합니다.')
    } else {
      message.reply('이미 음성채널에서 나온 상태입니다.')
    }
  }
}
