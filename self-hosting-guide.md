# Pinboard Self-Hosting Guide  
Hosting your own Pinboard is quite easy; just download some things, create a file, then you're good to go!  
  
# Notice Of Use  
If you use this code as a main feature for your bot, then your bot *must* be private. This cannot be the only feature of your bot if you plan to make it public.  
  
## Private Bots  
No need to do anything - I've got you covered already!  
  
## Public Bots  
Public bots can use Pinboard's code so long as they follow these guidelines:  
 * The Pinboard feature (sending pins to a pinboard) can*not* be the only/main feature of your bot.  
 * You must credit me in your bot's help command, and link to this repo.  
 * You may not make any monetary profit of said bot if the Pinboard feature is implemented.  
  
Please note these only apply assuming you're using Pinboard's code. If you write your own version of Pinboard from scratch... well, that's your work, isn't it? Can't stop you there!  
  
Public bots using Pinboard's code have my full permission to be added to bot lists, so long as they follow the above guidelines.  
  
# Self-Hosting Without Glitch  
Pinboard is hosted on glitch.com. As such, Pinboard has some code that's meant for use *in glitch*. If you don't remove this block, you may encounter a problem or two.  
I'll make it simple. Just go into `pinboard.js`, and delete the following code:  
```js
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
```  
Now after deleting that...  
  
# Actually Hosting The Thing  
Requirements  
 * NodeJS 8.x or later  
 * Discord.js 11.0+  
 * snekfetch  
 * Time  
  
To install NodeJS, go [here](https://nodejs.org/en/download/)  
To install discord.js, go into your command prompt/terminal and type `npm install discord.js`  
Snekfetch installation follows the same pattern, but instead it's `npm install snekfetch`  
  
Now, you need to create a `config.json` file. By default, the code looks for `pind.json`, so let's use that.  
  
`pind.json`  
```json
{
	"tokenboi":"bot token here",
	"dbots":"Discord Bot List API key here",
	"ink":"ls.terminal.ink API key here"
}
```  
  
If you plan on updating your server count to APIs, be sure to replace the link in `pinboard.js`  
  
That's it. You're done, and ready to host!  
Now go into your command prompt/terminal, and type `node pinboard.js`, assuming you haven't changed the file name.  
  
## Not On A List? No Problem!  
Pinboard automatically is set to update it's server count, and send it to Terminal and Discord Bot List.  
It does this when it starts up, when it enters a new server, and when it leaves a server.  
However, you may be hosting Pinboard's code for a bot that isn't on either list. ***gasp!***  
  
That's okay. Just delete the following bits of code:  
```js
function updateStats() {
snekfetch.post(`https://ls.terminal.ink/api/v1/bots/380450195797835776`)
.set('Authorization', pind.ink)
  .send({ "server_count": client.guilds.size })
  .then(() => console.log('Updated ls.terminal.ink stats.'))
  .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
  snekfetch.post(`https://discordbots.org/api/bots/stats`)
.set('Authorization', pind.dbots)
  .send({ "server_count": client.guilds.size })
  .then(() => console.log('Updated discordbots stats'))
  .catch(err => console.error(`Error while posting to DiscordBots: ${err.body}`));
}
```  
Then delete the `updateStats()` function in the ready event. Also delete the `guildCreate` and `guildDelete` events, you don't need those anymore.  
  
After that, you're good. Your bot should now work fine.  
  
## Reporting Issues  
If you're gonna report an issue, I'm going to assume you have basic knowledge of discord.js, NodeJS, and JavaScript.  
If you don't, go brush up on your knowledge yourself.  
I'm also going to assume you've followed every step of the above guide.