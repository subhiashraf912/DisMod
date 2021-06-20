"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckCaps = exports.CheckBannedWords = exports.checkRepeatedText = void 0;
const CheckRepeatedText_1 = __importDefault(require("./CheckRepeatedText"));
exports.checkRepeatedText = CheckRepeatedText_1.default;
const CheckBannedWords_1 = __importDefault(require("./CheckBannedWords"));
exports.CheckBannedWords = CheckBannedWords_1.default;
const CheckCaps_1 = __importDefault(require("./CheckCaps"));
exports.CheckCaps = CheckCaps_1.default;
