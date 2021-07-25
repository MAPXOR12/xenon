const { RichEmbed } = require("discord.js");
module.exports = class invite {
    constructor() {
        this.name = "invite",
        this.alias = [],
        this.usage = "x!invite"
    }

    async run(client, message, args) {
        try{
            let info = client.emojis.get("655091815401127966") || "ℹ️"
            client.generateInvite(['ADMINISTRATOR']).then(link => {
            let inviteEmbed = new RichEmbed()
            .setTitle(`${info} Info`)
            .setDescription(`**Invite Xenon**
[Xenon](${link})
[Xenon](https://discord.com/api/oauth2/authorize?client_id=794961180057403433&permissions=8&scope=bot) Pro Use \`x!pro\` to get more information.
[Xenon Turbo](https://discord.com/api/oauth2/authorize?client_id=794961180057403433&permissions=8&scope=bot)`)
            .setColor("#5DBCD2")
            .setLabel("k")
            message.channel.send(inviteEmbed);
            })
        }catch(e) {
            throw e;
        }
    }
}
