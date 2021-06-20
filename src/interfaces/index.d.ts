import { Message } from "discord.js";
export interface AutoModeratorManagerEvents {
    badWordUsage: (message: Message, badWords: string[]) => void;
    repeatedText: (message: Message, repeatedCount: number) => void;
    serverInvite: (message: Message, invite: string[]) => void;
    externalLink: (message: Message, links: string[]) => void;
    capsCheck: (message: Message, capsAmount: number) => void;
    emojisSpam: (message: Message, emojisCount: number) => void;
    spoilersSpam: (message: Message, spoilersCount: number) => void;
    mentionsSpam: (message: Message, mentionsCount: number) => void;
    fastMessageSpam: (message: Message) => void;
}
//# sourceMappingURL=index.d.ts.map