var log_state  = require("../../config.json");
const {checkState, setState, setLogChannel } = require("../../helpers.js");

var log_channel = "";

module.exports = {
    name: 'logging',
    aliases: ["log","missionreport"],
    run: async(client, message, args) => {
        let perms = message.member.permissions;
        let admin = perms.has("ADMINISTRATOR");
        if (!args) {
            message.reply("Options Required, See Usage.");
            return;
        }
        if (args[0]==='enable'){
            if (!admin){
                message.reply("Not Authorized to perform this action.")
                return;
            }
            setState(true);
            console.log("[+] Mission Report Enabled.")
        } else if (args[0]==='disable'){
            if (!admin){
                message.reply("Not Authorized to perform this action.")
                return;
            }
            setState(false);
            console.log("[-] Mission Report Disabled.")
        } else if (args[0]==='channel'){
                var channel = args[1];
                console.log(channel);
                setLogChannel(log_channel, channel);
        }
        if (checkState){
            client.on('messageDelete', function(message, log_channel){
                console.log("event flag");
                log_channel.send(`A message was deleted by god knows who.`)
            });
        }
    }
}