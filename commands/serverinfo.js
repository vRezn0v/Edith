module.exports = {
	name: 'serverinfo',
	description: 'Basic Server Info',
	run: async (client, msg, args) => {
        var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var userCount = msg.guild.members.filter(member => !member.user.bot).size;
        var botCount = msg.guild.members.filter(member => member.user.bot).size; 
        const serverinfo = {
            color: 0xFF1493,
            title: msg.guild.name,
            author: {
                name: 'Edith',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
                url: 'https://github.com/vrezn0v/edith',
            },
            description: 'Some description here',
            thumbnail: {
                url: msg.guild.iconURL,
            },
            fields: [
                {
                    name: 'Created At:',
                    value: msg.guild.createdAt.getDate() + ' ' + month[msg.guild.createdAt.getMonth()] + ' ' + msg.guild.createdAt.getFullYear(),
                    inline: false,
                },
                {
                    name: 'Server ID:',
                    value: msg.guild.id,
                    inline: true,
                },
                {
                    name: 'Owner:',
                    value: msg.guild.owner.toString(),
                    inline: true,
                },
                {
                    name: 'Member Count:',
                    value: userCount+' humans'+' & '+botCount+' bots',
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
        
        msg.channel.send({ embed: serverinfo });
        
	},
};