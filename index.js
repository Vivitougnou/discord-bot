const Discord = require('discord.js'),
    client = new Discord.Client(),
    config = require('./config.json'),
    fs = require('fs')
 
client.login(process.env.TOKEN)
client.commands = new Discord.Collection()
client.db = require('./db.json')

humanizeDuration = require('humanize-duration'),

client.on('ready', () => {
    console.log('Je suis opérationnel');
  });
 
fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})
 
client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return
    if (!message.member.hasPermission('MANAGE_CHANNELS') && client.db.lockedChannels.includes(message.channel.id)) return message.delete()

    
 
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    command.run(message, args, client)
})

client.on('channelCreate', channel => {
    if (!channel.guild) return
    const muteRole = channel.guild.roles.cache.find(role => role.name === 'Muted')
    if (!muteRole) return
    channel.createOverwrite(muteRole, {
        SEND_MESSAGES: false,
        CONNECT: false,
        ADD_REACTIONS: false
    })
})

client.on('ready', () => {
    const statuses = [
        () => `35 INVITE = NITRO`,
        () => `-help`,
        () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} membres sur Nitro Desert`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'PLAYING'})
        i = ++i % statuses.length
    }, 1e4)
})