const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: ';',
    unknownCommandResponse: false,
    owner: '143782390307749888',
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['game', 'Adventure Game Commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.user.setActivity('you', { type: 'WATCHING' })
})

client.login(process.env.DISCORD_BOT_TOKEN)
