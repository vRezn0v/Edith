module.exports = {
    name: 'mod',
    description: 'Commands to help with moderation.',
    execute(msg, args, client){
        msg.channel.send(`${args}`);
        console.log(args);
        if (args[0]==='kick'){
            msg.channel.send(`Are you sure you want to kick ${args[1].displayName}? (y/n)`);
        }
        else if (args[0]==='mute'){
            msg.channel.send(`Are you sure you want to mute ${args[1].displayName}? (y/n)`);
        }
        else if (args[0]==='ban'){
            msg.channel.send(`Are you sure you want to ban ${args[1].displayName}? (y/n)`);
        }
        else if (!args.length){
            msg.channel.send("Ay Cap'n provide some args or see usage.");
        }
    },
}