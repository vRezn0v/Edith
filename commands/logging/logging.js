var log_state  = require("../../config.json");
const {checkState, setState } = require("../../helpers.js");

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
            console.log("[-] Mission Report Enabled.")
        }
        if (checkState){
            client.on('messageDelete', function(message, channel){
                console.log(message);
                message.channel.send(`${message} was deleted by god knows who.`)
            });
        }
    }
}