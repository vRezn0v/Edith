const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.on('ready', () => {
    client.user.setActivity("staring into void of existence.", { type: "PLAYING"});
    console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
  });


client.on('message', msg => {
    console.log(msg.content);
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
	    command.run(client, msg, args);
    } catch (error) {
	    console.error(error);
	    msg.reply('Error in Execution!');
    }
});

/*client.on('guildMemberAdd', (member) => {
    console.log(`${member.user.username} has joined.`);
});*/


client.login(token);