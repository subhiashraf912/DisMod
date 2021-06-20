"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const optionsChecker = (options, defaultOptions) => {
    if (!options)
        options = defaultOptions;
    if (options.bannedWords === undefined || options.bannedWords === null)
        options.bannedWords = defaultOptions.bannedWords;
    if (options.ignoredUsers === undefined || options.ignoredUsers === null)
        options.ignoredUsers = defaultOptions.ignoredUsers;
    if (options.adminCheck === undefined || options.adminCheck === null)
        options.adminCheck = defaultOptions.adminCheck;
    if (options.botCheck === undefined || options.botCheck === null)
        options.botCheck = defaultOptions.botCheck;
    return options;
};
exports.default = optionsChecker;
