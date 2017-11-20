const Discord = require("discord.js");
const client = new Discord.Client();
const pinnedRecently = new Set();
const http = require('http');
const pind = require("./pind.json");
const prefix = "pin.";
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.login(pind.tokenboi)

client.on("ready", () =>
client.user.setGame("with pushpins"));

client.on("channelPinsUpdate", channel => {
	if(pinnedRecently.has(channel.id)) return;
const ch = channel;
const board = channel.guild.channels.find("name", "pinboard")
 {channel.fetchPinnedMessages().then(messages => {
 
	const pinMsgs = messages.first()
	
	if(!pinMsgs) return;
	
	if(!board) {
if(channel.guild.me.hasPermission("MANAGE_CHANNELS") == false) return;
channel.guild.createChannel('pinboard', 'text')
channel.guild.channels.find("name", "pinboard").send(pinMsgs.id, {embed:
{color: 0x123456,
title: `New pinned message in ${channel.name}`,
description: pinMsgs.content}});
if(ch.permissionsFor(message.guild.me).has("MANAGE_MESSAGES") == false) return;
pinMsgs.unpin()
pinnedRecently.add(ch.id);
setTimeout(() => {
	pinnedRecently.delete(ch.id);
}, 2500);
} else {
	if(board.permissionsFor(board.guild.me).has("EMBED_LINKS") == false) return;
board.send(pinMsgs.id, {embed:
{color: 0x123456,
title: `New pinned message in ${channel.name}`,
description: pinMsgs.content}})
if(ch.permissionsFor(message.guild.me).has("MANAGE_MESSAGES") == false) return;
pinMsgs.unpin()
pinnedRecently.add(ch.id);
setTimeout(() => {
	pinnedRecently.delete(ch.id);
}, 2500);
}
	
	if(ch.guild.id !== pind.testServer) return;
channel.send("New pinned message with content\n" + pinMsgs.content)

})}})

client.on("message", (message) => {
	if(message.author.bot) return;
	if(message.channel.type == 'dm') return;
	const boardCh = message.guild.channels.find("name", "pinboard")

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
	
	})
