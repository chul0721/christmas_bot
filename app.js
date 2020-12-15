const Discord = require('discord.js')
const client = new Discord.Client({
  disableEveryone: true
})
const fs = require('fs')
const config = require('./config.json')

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
client.categories = fs.readdirSync('./commands/')

require('./handlers/command.js')(client)

client.on('ready', () => {
  console.log('Bot Loaded')
  setInterval(() => {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        client.user.setPresence({
          status: 'online',
          activity: {
            name: 'Merry Christmas!',
            type: 'PLAYING'
          }
        })
        break
      case 1:
        client.user.setPresence({
          status: 'online',
          activity: {
            name: '이 메시지는 10초마다 바뀝니다!',
            type: 'PLAYING'
          }
        })
        break
      case 2:
        client.user.setPresence({
          status: 'online',
          activity: {
            name: '크리스마스를 더욱 즐겁게 해 드리기 위해 만들어진 봇입니다!',
            type: 'PLAYING'
          }
        })
        break
    }
  }, 10000)
})

const prefix = config.prefix

client.on('message', message => {
  if (message.channel.type === 'dm') return
  if (!message.content.startsWith(prefix)) return
  if (message.author.bot) return
  if (!message.guild) return

  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const cmd = args.shift().toLowerCase()
  if (cmd.length === 0) return

  let command = client.commands.get(cmd)
  if (!command) command = client.commands.get(client.aliases.get(cmd))

  if (command) {
    command.run(client, message, args)
  }
})

client.on('message', message => {
  if (message.channel.type === 'dm') return
  if (message.author.bot) return
  if (!message.guild) return

  if (message.content.includes('ㅠ') || message.content.includes('ㅜ')) {
    const messages = ['울면 앙대', '애야 울어봤자 산타는 없단다', `괜찮아 ${message.author}야 울어도 돼 사실 산타는 없거든`, 'ㅠㅠ 울지마ㅠㅠ', '울면 산타 안온다!!', 'ㅠㅠㅠㅠ', '뚝!', '힝', '너가 울면 나도 슬퍼ㅜㅜ', '무슨일이야!']
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    message.channel.send(randomMessage)
  }
})

client.login(`${config.token}`)
