const Discord = require("discord.js");
const client = new Discord.Client();
const pinnedRecently = new Set();
const prefix = "pin.";

client.login("bot token here")

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
channel.guild.createChannel('pinboard', 'text', 'No pinboard channel found')
channel.guild.channels.find("name", "pinboard")
} else {
board.send(pinMsgs.id, {embed:
{color: 0x123456,
title: `New pinned message in ${channel.name}`,
description: pinMsgs.content}})
pinMsgs.unpin()
pinnedRecently.add(ch.id);
setTimeout(() => {
	pinnedRecently.delete(ch.id);
}, 2500);
}
	
//Remove this. It's only intended for testing purposes.
channel.send("New pinned message with content\n" + pinMsgs.content)

})}})

client.on("message", (message) => {
	if(message.author.bot) return;
	if(message.channel.type == 'dm') return;
	
if(message.content == prefix + "stop") {
	//Emergency stop
	if(message.author.id !== "374245143655612428") return;
process.exit()
}
	
	})
