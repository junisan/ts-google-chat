import { ISimpleMessage } from "../types";
export declare class SimpleMessage implements ISimpleMessage {
    private message;
    constructor(text?: string);
    addText(text: string): this;
    addLine(): this;
    addBold(text: string): this;
    addItalic(text: string): this;
    addStrike(text: string): this;
    addMonospaceText(text: string): this;
    addMonospaceBlock(text: string): this;
    addLink(link: string, displayText: string | null): this;
    addMention(userId: string): this;
    addMentionAll(prependText: string | null, appendText: string | null): this;
    render(): {
        text: string;
    };
}
