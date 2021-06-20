## About

A powerful package that allows you to create auto moderation events easily! very simple and powerful to use!

## Installation

`npm i --save dismod`

## Github

https://github.com/subhiashraf912/DisMod

## Example usage

```js
const { Client } = require("discord.js");
const client = new Client();
const DisMod = require("dismod");
const autoModerator = new DisMod(client);

autoModerator.on("badWordUsage", (message, usedBadWords) => {
  message.channel.send("Don't use bad word");
  //warnUserSomeHow()
  message.delete();
});
autoModerator.on("repeatedText", (message, repeatedCount) => {
  if (repeatedCount > 3) {
    message.channel.send(
      `Don't send repated text! (${repeatedCount} repeated messages!)`
    );
    //warnUserSomeHow()
  }
});
autoModerator.on("capsCheck", (message, amount) => {
  if (message.content.length > 5 && amount >= 70) {
    message.channel.send("Don't send to much caps!");
    //warnUserSomeHow()
  }
});
autoModerator.on("emojisSpam", (message, emojisCount) => {
  if (emojisCount >= 4) {
    message.channel.send("Don't spam emoji");
    //warnUserSomeHow()
  }
});
autoModerator.on("externalLink", (message, links) => {
  const linksString = links.map((link) => ` \`${link}\` `);
  message.channel.send("Don't send external link from" + linksString);
  //warnUserSomeHow()
  message.delete();
});
autoModerator.on("fastMessageSpam", (message) => {
  message.channel.send("Don't spam messages!");
  //warnUserSomeHow()
  message.delete();
});
autoModerator.on("mentionsSpam", (message, mentionsCount) => {
  if (mentionsCount >= 4) message.channel.send("Don't spam mention!");
  //warnUserSomeHow()
});
autoModerator.on("serverInvite", (message, invites) => {
  const invitesString = invites.map((invite) => ` \`${invite}\` `);
  message.channel.send("Don't send invites!" + invitesString);
  //warnUserSomeHow()
  message.delete();
});
autoModerator.on("spoilersSpam", (message, spoilersCount) => {
  if (spoilersCount >= 3)
    message.channel.send("Don't spam spoilers!" + spoilersCount);
  //warnUserSomeHow()
});

client.login("YOUR BOT TOKEN");
```
