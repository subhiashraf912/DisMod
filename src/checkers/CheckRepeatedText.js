"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkRepeatedText = (str) => {
    const regexp = /^\s*(.+?)(\s*\1\s*)+$/;
    let matched = str.match(regexp);
    if (!matched)
        matched = [];
    return matched;
};
exports.default = checkRepeatedText;
