import { Client } from "discord.js";
import { TypedEmitter } from "tiny-typed-emitter";
import { AutoModeratorManagerEvents } from "./interfaces";
import { AutoModManagerOptions } from "./types";
export default class AutoModeratorManager extends TypedEmitter<AutoModeratorManagerEvents> {
    private _messageSpams;
    constructor(client: Client, options?: AutoModManagerOptions);
}
//# sourceMappingURL=AutoModeratorManager.d.ts.map