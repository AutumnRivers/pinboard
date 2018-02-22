const Discord = require("discord.js");
const client = new Discord.Client();
const pinnedRecently = new Set();
const sql = require("sqlite");
sql.open("./database/pindb.sqlite");
const pind = require("./pind.json");
const prefix = "pin.";

client.login(pind.tokenboi)

client.on("ready", () => {
client.user.setGame("with pushpins")
client.guilds.forEach(guild => {
	sql.run("CREATE TABLE IF NOT EXISTS guildInfo (guildId INTEGER, pingPin TEXT)").then(() => {
	sql.run("INSERT INTO guildInfo (guildId, pingPin) VALUES (?, ?)", [guild.id, false])
	})
})
});

client.on("channelPinsUpdate", channel => {
	sql.get(`SELECT * FROM guildInfo WHERE guildId = ${channel.guild.id}`).then(info => {
		if(!info) {
			sql.run("INSERT INTO guildInfo (guildId, pingPin) VALUES (?, ?)", [guild.id, false])
		}

		if(info.pingPin == "everyone") {
			var mainContent = "@everyone"
		} else if(info.pingPin == "here") {
			var mainContent = "@here"
		} else {
			var mainContent = ""
		}

	if(pinnedRecently.has(channel.id)) return;
const ch = channel;
const board = channel.guild.channels.find("name", "pinboard")
 {channel.fetchPinnedMessages().then(messages => {
 
	const pinMsgs = messages.first()
	
	if(!pinMsgs) return;
	if(pinMsgs.embeds[0] !== undefined) {
	if(pinMsgs.attachments.first() !== undefined) {
			var atch = pinMsgs.attachments.first().url
		} else if(pinMsgs.embeds[0].thumbnail !== undefined) {
			var atch = pinMsgs.embeds[0].thumbnail.url
		} else {
				var atch = undefined
			}} else  {
				var atch = undefined
			}
	
	if(!board) {
if(channel.guild.me.hasPermission("MANAGE_CHANNELS") == false) return;
	channel.guild.createChannel('pinboard', 'text')
	channel.guild.channels.find("name", "pinboard").send(mainContent, {embed:
		{color: 0x123456,
		title: `New pinned message in ${channel.name}`,
		description: pinMsgs.content},
		image: {
			url: atch
		},
		thumbnail: {
			url: pinMsgs.author.avatarURL
		}
	});
	if(ch.permissionsFor(ch.guild.me).has("MANAGE_MESSAGES") == false) return;
pinMsgs.unpin()
	pinnedRecently.add(ch.id);
setTimeout(() => {
	pinnedRecently.delete(ch.id);
}, 45000);
} else {
	if(board.permissionsFor(board.guild.me).has("EMBED_LINKS") == false) return;
	if(board.permissionsFor(board.guild.me).has("SEND_MESSAGES") == false) return;
		board.send(mainContent, {embed:
			{color: 0x123456,
			title: `New pinned message in ${channel.name}`,
			description: (pinMsgs.content),
			image: {
				url: atch
			},
			thumbnail: {
				url: pinMsgs.author.avatarURL
			},
			footer: {
				text: `Message created by ${pinMsgs.author.username} (<@${pinMsgs.author.id})`
			}
		}})
	if(ch.permissionsFor(ch.guild.me).has("MANAGE_MESSAGES") == false) return;
pinMsgs.unpin()
	pinnedRecently.add(ch.id);
setTimeout(() => {
	pinnedRecently.delete(ch.id);
}, 45000);
}
	
	if(ch.guild.id !== pind.testServer) return;
channel.send("New pinned message with content\n" + pinMsgs.content)

})}
})
})


client.on("message", (message) => {
	if(message.author.bot) return;
	if(message.channel.type == 'dm') return;
	const boardCh = message.guild.channels.find("name", "pinboard")
	const args = message.content.split(" ").slice(1).join(" ");

if(message.content.toLowerCase() == (prefix + "info")) {
	message.channel.send("<:pinboard:381044242266456064> Pinboard\n```\nEver wanted to go past discord's pin limit? Are you known for pinning just too much? Well, worry no longer! Pinboard will take care of it for you!\n-=Techie Stuff=-\nLib: discord.js\nRunning on node v8\nHosted on glitch.com\n```\nPinboard requires a #pinboard channel, along with the Manage Messages, Send Messages, and Embed Links permissions.\n`Pinboard, made by SmartiePlays#543`")
	}
	
if(message.content == prefix + "stop") {
	if(message.author.id !== "374245143655612428") return;
process.exit()
}

if(message.content.toLowerCase() == prefix + "check") {
	if(!boardCh) return message.channel.send("Channel check failed! Please create a #pinboard channel, or run pin.board, and let me make it for you!");
	if(message.channel.permissionsFor(message.guild.me).has("MANAGE_MESSAGES") == false) return   message.channel.send("I do not have the manage messages permission for this guild! Please contact a server admin.");
  
  if(boardCh.permissionsFor(message.guild.me).has("SEND_MESSAGES") == false) return message.channel.send("Check failed! I do not have the send messages permission in the pinboard channel!");
	if(message.guild.me.hasPermission("EMBED_LINKS") == false) return message.channel.send("I do not have the embed links permission for this guild! Please contact a server admin.");
	message.channel.send("Check passed. I'm ready to start! :wave:");
	}
	
	if(message.content.toLowerCase() == prefix + "board") {
		if(!boardCh) {
			if(message.guild.me.hasPermission("MANAGE_CHANNELS", true, true, true) == false) return message.reply("I do not have the manage channels permission! Please contact a server admin.")
			if(message.member.hasPermission("MANAGE_CHANNELS", true, true, true) == false) return message.reply("you do not have the manage channels permission!")
			message.guild.createChannel('pinboard', 'text').then(channel => message.channel.send(`Pinboard channel successfully created! <#${channel.id}>`))
			} else {
				message.channel.send("A pinboard channel already exists, as far as I know...\nIf one doesn't exist, please contact Smartie!")
			}}
			
	if(message.content.toLowerCase() == prefix + "help") {
		message.channel.send("**Pinboard Help**\n```\nPrefix: pin.\n\ninfo - Uhhhh stuff, I guess?\ncheck - Is Pinboard ready to go?\nboard - Create the #pinboard channel, if it doesn't exist already.\n```")
	}
  
  if (message.content.toLowerCase() == ("pin.invite")) {
		message.channel.send(`Invite me to your server with this link!\nhttps://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=289808`)
}

	if(message.content.toLowerCase() == ("pin.setup")) {
		message.channel.send("Need help setting me up? Have I got a guide for you!\nhttps://github.com/SmartieYT/pinboard/blob/master/setup.md")
	}

	if(message.content.toLowerCase() == ("pin.git") || message.content.toLowerCase() == "pin.github") {
		message.reply("This is my GitHub repo!\nhttps://github.com/SmartieYT/pinboard")
	}

	if(message.content.toLowerCase().startsWith("pin.setping")) {
		if(message.member.hasPermission("MANAGE_GUILD", true, true, true) == false) return message.reply("no");
		if(args == "everyone") {
			sql.get(`SELECT * FROM guildInfo WHERE guildId = ${message.guild.id}`).then(info => {
				if(!info) {
					sql.run("INSERT INTO guildInfo (guildId, pingPin) VALUES (?, ?)", [message.guild.id, "everyone"])
					message.reply("Pinboard will now ping everyone on each pin.")
				} else {
					sql.run(`UPDATE guildInfo SET pingPin = "everyone" WHERE guildId = ${message.guild.id}`)
					message.reply("Pinboard will now ping everyone on each pin.")
				}
	})
	} else if(args == "here") {
			sql.get(`SELECT * FROM guildInfo WHERE guildId = ${message.guild.id}`).then(info => {
				if(!info) {
					sql.run("INSERT INTO guildInfo (guildId, pingPin) VALUES (?, ?)", [message.guild.id, "here"])
					message.reply("Pinboard will now ping here on each pin.")
				} else {
					sql.run(`UPDATE guildInfo SET pingPin = "here" WHERE guildId = ${message.guild.id}`)
					message.reply("Pinboard will now ping here on each pin.")
				}
	})
	} else if(args == "none") {
		sql.get(`SELECT * FROM guildInfo WHERE guildId = ${message.guild.id}`).then(info => {
			if(!info) {
				sql.run("INSERT INTO guildInfo (guildId, pingPin) VALUES (?, ?)", [message.guild.id, false])
				message.reply("Pinboard will no longer ping with each pin")
			} else {
				sql.run(`UPDATE guildInfo SET pingPin = "false" WHERE guildId = ${message.guild.id}`)
				message.reply("Pinboard will no longer ping each pin.")
			}
})
	} else {
		message.reply("incorrect arguments!\n**Correct Arguments**\n`everyone`\n`here`\n`none`")
	}
}
})
