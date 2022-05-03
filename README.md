## About

A powerful package that allows you to create auto moderation events easily! very simple and powerful to use!
Update 1.1.0: Should work with discord.js version +13

## Installation

`npm i --save dismod`

## Github

https://github.com/subhiashraf912/DisMod

## Example usage

```js
const { Client } = require("discord.js");
const client = new Client({
     intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
        ]});
const DisMod = require("dismod");

const autoModerator = new DisMod.Manager(client);
/*
OR YOU CAN PASS YOUR OPTIONS
const autoModerator = new DisMod.Manager(client, {
  adminCheck: true, // When it's enabled, the the events will be emitted normally when someone has administartor perms.

  bannedWords: ["hentai", "f-words"], // there are default banned words tho, if you want your own/another language, then just put them here
  
  botCheck: false, // when it's enabled, the events will be emitted normally on the bots. by default it ignores them.

ignoredUsers:["some id"] //some users to ignore.
})

THO KEEP IN MIND THAT YOU HAVE YOUR OWN EVENTS, YOU CAN SET THEM UP USING SOMETHING LIKE if (message.member.hasPermission("perms")) or if (message.author.bot)return; ETC
ALSO YOU CAN CONNECT THEM TO DATABASE AND HAVE SETTINGS FOR EACH GUILD, YOU HAVE A LOT OF OPTIONS! <3 GL WITH YOUR BOT

*/

autoModerator.on("badWordUsage", (message, usedBadWords) => {
  message.channel.send({ content: "Don't use bad word" });
  //warnUserSomeHow()
  message.delete();
});
autoModerator.on("repeatedText", (message, repeatedCount) => {
  if (repeatedCount > 3) {
    message.channel.send({ content: `Don't send repated text! (${repeatedCount} repeated messages!)`});
    //warnUserSomeHow()
  }
});
autoModerator.on("capsCheck", (message, amount) => {
  //amount is percent, example: 70% of the message are caps.
  if (message.content.length > 5 && amount >= 70) {
    message.channel.send({ content: "Don't send to much caps!" });
    //warnUserSomeHow()
  }
});
autoModerator.on("emojisSpam", (message, emojisCount) => {
  if (emojisCount >= 4) {
    message.channel.send({ content: "Don't spam emoji" });
    //warnUserSomeHow()
  }
});
autoModerator.on("externalLink", (message, links) => {
  const linksString = links.map((link) => ` \`${link}\` `);
  message.channel.send({ content: `Don't send external link from ${linksString}` });
  //warnUserSomeHow()
  message.delete();
});
autoModerator.on("fastMessageSpam", (message) => {
  message.channel.send({ content: "Don't spam messages!" });
  //warnUserSomeHow()
  message.delete();
});
autoModerator.on("mentionsSpam", (message, mentionsCount) => {
  if (mentionsCount >= 4) message.channel.send({ content: "Don't spam mention!" });
  //warnUserSomeHow()
});
autoModerator.on("serverInvite", (message, invites) => {
  const invitesString = invites.map((invite) => ` \`${invite}\` `);
  message.channel.send({ content: `Don't send invites! ${invitesString}` });
  //warnUserSomeHow()
  message.delete();
});
autoModerator.on("spoilersSpam", (message, spoilersCount) => {
  if (spoilersCount >= 3) message.channel.send({ content: `Don't spam spoilers! ${spoilersCount}` });
  //warnUserSomeHow()
});

client.login("YOUR BOT TOKEN");
```
