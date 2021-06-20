"use strict";
/*
example

const autoModerator = new AutoModerator(client);
autoModerator.on("badWordUsage", (message, badWords) => {
  message.channel.send("Don't use bad word");
});
autoModerator.on("repeatedText", (message, repeatedCount) => {
  message.channel.send(
    `Don't send repated text! (${repeatedCount} repeated messages!)`
  );
});
autoModerator.on("capsCheck", (message, amount) => {
  if (message.content.length > 5 && amount >= 70) {
    message.channel.send("Don't send to much caps!");
  }
});
autoModerator.on("emojisSpam", (message, emojisCount) => {
  if (emojisCount >= 4) message.channel.send("Don't spam emoji");
});
autoModerator.on("externalLink", (message, links) => {
  const linksString = links.map((link) => ` \`${link}\` `);
  message.channel.send("Don't send external link from" + linksString);
});
autoModerator.on("fastMessageSpam", (message) => {
  message.channel.send("Don't spam messages!");
});
autoModerator.on("mentionsSpam", (message, mentionsCount) => {
  if (mentionsCount >= 4) message.channel.send("Don't spam mention!");
});
autoModerator.on("serverInvite", (message, invites) => {
  const invitesString = invites.map((invite) => ` \`${invite}\` `);
  message.channel.send("Don't send invites!" + invitesString);
});
autoModerator.on("spoilersSpam", (message, spoilersCount) => {
  if (spoilersCount >= 3)
    message.channel.send("Don't spam spoilers!" + spoilersCount);
});



*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const tiny_typed_emitter_1 = require("tiny-typed-emitter");
const checkers_1 = require("./checkers");
const CheckEmojisSpam_1 = __importDefault(require("./checkers/CheckEmojisSpam"));
const CheckExternalLinks_1 = __importDefault(require("./checkers/CheckExternalLinks"));
const constants_1 = require("./constants");
const OptionsChecker_1 = __importDefault(require("./OptionsChecker"));
class AutoModeratorManager extends tiny_typed_emitter_1.TypedEmitter {
    constructor(client, options) {
        super();
        this._messageSpams = new discord_js_1.Collection();
        options = OptionsChecker_1.default(options, constants_1.defaultOptions);
        if (!client)
            throw new Error("Client is missing");
        client.on("message", (message) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            if (((options === null || options === void 0 ? void 0 : options.adminCheck) &&
                ((_a = message.member) === null || _a === void 0 ? void 0 : _a.hasPermission("ADMINISTRATOR"))) ||
                (!(options === null || options === void 0 ? void 0 : options.botCheck) && message.author.bot) ||
                !message.guild ||
                message.author.id === ((_b = message.client.user) === null || _b === void 0 ? void 0 : _b.id) ||
                ((_c = options === null || options === void 0 ? void 0 : options.ignoredUsers) === null || _c === void 0 ? void 0 : _c.includes(message.author.id)))
                return;
            let emojiCheck = CheckEmojisSpam_1.default(message.content);
            if (!emojiCheck)
                emojiCheck = [];
            const saidBannedWords = checkers_1.CheckBannedWords(options, message.content);
            //
            if (saidBannedWords[0])
                yield this.emit("badWordUsage", message, saidBannedWords);
            //
            if (checkers_1.checkRepeatedText(message.content)[0] && emojiCheck.length <= 4)
                this.emit("repeatedText", message, checkers_1.checkRepeatedText(message.content).length);
            //
            const capsAmount = checkers_1.CheckCaps(message.content);
            this.emit("capsCheck", message, capsAmount);
            //
            if (emojiCheck && emojiCheck.length >= 4)
                this.emit("emojisSpam", message, emojiCheck.length);
            //
            if (CheckExternalLinks_1.default(message.content)[0] &&
                !message.content.includes("discord.gg"))
                this.emit("externalLink", message, CheckExternalLinks_1.default(message.content));
            //
            if (CheckExternalLinks_1.default(message.content)[0] &&
                message.content.includes("discord.gg" || "discordapp.com/invite/"))
                this.emit("serverInvite", message, CheckExternalLinks_1.default(message.content));
            //
            if (this._messageSpams.has(message.author.id)) {
                const data = this._messageSpams.get(message.author.id);
                const { lastMessage, timer } = data;
                const difference = message.createdTimestamp - lastMessage.createdTimestamp;
                let messages = data.messages;
                if (difference > 2000) {
                    clearTimeout(timer);
                    data.messages = 1;
                    data.lastMessage = message;
                    data.timer = setTimeout(() => {
                        this._messageSpams.delete(message.author.id);
                    }, 5000);
                    this._messageSpams.set(message.author.id, data);
                }
                else {
                    ++messages;
                    if (messages === 5) {
                        this.emit("fastMessageSpam", message);
                    }
                    else {
                        data.messages = messages;
                        this._messageSpams.set(message.author.id, data);
                    }
                }
            }
            else {
                const remove = setTimeout(() => {
                    this._messageSpams.delete(message.author.id);
                }, 5000);
                this._messageSpams.set(message.author.id, {
                    messages: 1,
                    lastMessage: message,
                    timer: remove,
                });
            }
            //
            if (message.mentions.users.size >= 4)
                this.emit("mentionsSpam", message, message.mentions.users.size);
            //
            const spoilersAmount = (message.content.split(" ").join("").split("||").length - 1) / 2;
            if (spoilersAmount >= 3)
                this.emit("spoilersSpam", message, spoilersAmount);
        }));
    }
}
exports.default = AutoModeratorManager;
