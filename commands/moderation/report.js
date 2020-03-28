const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { setReportChannel } = require("../../helpers.js");

let reportchannel = "reports";

module.exports = {
    name: "report",
    category: "moderation",
    description: "Reports a member",
    usage: "<mention | id>",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();

        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);
        
        if (args[0]==='set' && args[1]){
            console.log(message.member.hasPermission("BAN_MEMBERS"));
            setReportChannel(reportchannel, args[1]);
            message.channel.send();
        }

        if (!rMember)
            return message.reply("Couldn't find that person").then(m => m.delete(5000));
        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot){
            return message.channel.send("Unable to report, contact server staff please.").then(m => m.delete(5000));
        }
        if(!args[1])
            return message.reply("A reason is required to report.").then(m => m.delete(5000));
        
        const channel = message.guild.channels.find(c => c.name === reportchannel);
        console.log(reportchannel);
        console.log(channel);
        if (!channel)
            return message.channel.send("Couldn't find set report channel.");

        const embed = new RichEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Reported member", rMember.user.displayAvatarURL)
            .setDescription(stripIndents`**Member:** ${rMember} (${rMember.user.id})
            **Reported by:** ${message.member}
            **Reported in:** ${message.channel}
            **Reason:** ${args.slice(1).join(" ")}`);

        return channel.send(embed);
    }
}