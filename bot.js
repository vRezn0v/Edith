const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

var greetings = ["Hello there", "Hi there", "Hullo there", "Hullo", "Hi", "Heyo", "Heyos", "Yo", "Hiya"];

function greet() {
    var num = Math.floor(Math.random()*greetings.length);
    return greetings[num];
}

var exp;

client.on('ready', () => {
    client.user.setActivity(`existing`);
    console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
  });

client.on('message', msg => {
    console.log(msg.content);
    if (greetings.includes(msg.content) && !msg.author.bot) {
        msg.channel.send(greet());
    }
});

client.on('guildMemberAdd', (member) => {
    console.log(`${member.user.username} has joined.`);
});


client.login(auth.token);