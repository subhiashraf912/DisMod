"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CheckEmojiSpam = (text) => {
    const checkArray = text.match(/<:.+?:\d+>/g);
    if (!checkArray)
        return null;
    return checkArray;
};
exports.default = CheckEmojiSpam;
