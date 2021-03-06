"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let regexp = /^(?:(?:http?|ftp|https):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
const checkExternalLinks = (text) => {
    const args = text.split(" ");
    let checkArray = [];
    args.forEach((arg) => {
        let argCheck = arg.match(regexp);
        if (!argCheck)
            argCheck = [];
        argCheck.forEach((subArg) => checkArray === null || checkArray === void 0 ? void 0 : checkArray.push(subArg));
    });
    return checkArray;
};
exports.default = checkExternalLinks;
