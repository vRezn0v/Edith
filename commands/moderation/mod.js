module.exports = {
    name: 'mod',
    aliases: ["moderator","m"],
    description: 'Commands to help with moderation.',
    run: async (client, message, args) => {
        //message.channel.send(`${args}`);
        let perms = message.member.permissions;
        let admin = perms.has("KICK_MEMBERS");
        console.log(args);
        if (admin){
            if (args[0]==='kick'){
                message.channel.send(`Are you sure you want to kick ${args[1].displayName}? (y/n)`);
            }
            else if (args[0]==='mute'){
                message.channel.send(`Are you sure you want to mute ${args[1].displayName}? (y/n)`);
            }
            else if (args[0]==='ban'){
                message.channel.send(`Are you sure you want to ban ${args[1].displayName}? (y/n)`);
            }
            else if (!args.length){
                message.channel.send("Ay Cap'n provide some args or see usage.");
            }
        } 
        else {
            message.reply("Not Authorized. This event will be reported.")
        }
    },
}