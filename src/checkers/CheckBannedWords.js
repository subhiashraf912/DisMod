"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
exports.default = (options, text) => {
    const saidBannedWords = [];
    let args = text;
    constants_1.symbols.forEach((symbol) => {
        const symbolCount = args.split(symbol).length - 1;
        for (let i = 0; i < symbolCount; i++) {
            args = args.replace(symbol, "");
        }
    });
    const bannedWords = options === null || options === void 0 ? void 0 : options.bannedWords;
    bannedWords === null || bannedWords === void 0 ? void 0 : bannedWords.forEach((bannedWord) => {
        if (args.toLowerCase().includes(bannedWord.toLowerCase()))
            saidBannedWords.push(bannedWord);
    });
    return saidBannedWords;
};
