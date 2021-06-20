import { Message } from "discord.js";
export declare type AutoModManagerOptions = {
    adminCheck?: boolean;
    botCheck?: boolean;
    bannedWords?: string[];
    ignoredUsers?: string[];
};
export declare type SpamType = {
    messages: number;
    lastMessage: Message;
    timer: any;
};
//# sourceMappingURL=index.d.ts.map