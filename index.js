"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const AutoModeratorManager_1 = __importDefault(require("./src/AutoModeratorManager"));
exports.Manager = AutoModeratorManager_1.default;
exports.default = AutoModeratorManager_1.default;
