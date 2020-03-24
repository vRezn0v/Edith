module.exports = {
    name: 'userinfo',
    description: 'Info for tagged user, duh!',
    execute(msg, args, client){
        if (!args.length){
            var user = msg.author;
        }
        else if (args.length===1){
            var x = args[0];
            x = x.slice(2,-1);
            if (x.startsWith('!')){
                x = x.slice(1);
            }
            var user = fetch(x);
        }
        else {
            msg.channel.send("/`/`/`Usage: =userinfo or =userinfo <user>/`/`/`");
            return;
        }
        console.log(user);
        const userinfo = {
            color: 0xFF1493,
            author: {
                name: 'Edith',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
                url: 'https://github.com/vrezn0v/edith',
            },
            thumbnail: {
                url: user.avatarURL,
            },
            fields: [
                {
                    name: 'Name:',
                    value: user.username,
                    inline: false,
                },
                {
                    name: 'Cake Day:',
                    value: user.discriminator,
                    inline: true,
                },
                {
                    name: 'Idk:',
                    value: 'Help Me!',
                    inline: false,
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
            ],
            
            timestamp: new Date(),
            footer: {
                text: 'Yeet',
            },
        };
        
        msg.channel.send({ embed: userinfo });   
    }
}