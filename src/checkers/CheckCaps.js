"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CheckCaps = (str) => {
    const upperCaseCount = str.length - str.replace(/[A-Z]/g, "").length;
    const amountPerCent = (upperCaseCount / str.length) * 100;
    return amountPerCent;
};
exports.default = CheckCaps;
