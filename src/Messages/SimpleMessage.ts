import {ISimpleMessage} from "../types";

export class SimpleMessage implements ISimpleMessage{
    private message:string;

    constructor(text?:string) {
        this.message = text??'';
    }

    addText(text:string) {
        this.message += text;
        return this;
    }

    addLine() {
        return this.addText('\r\n');
    }

    addBold(text: string){
        return this.addText(`*${text}*`);
    }

    addItalic(text: string) {
        return this.addText(`_${text}_`);
    }

    addStrike(text: string) {
        return this.addText(`~${text}~`);
    }

    addMonospaceText(text: string) {
        return this.addText("`" + text + "`");
    }

    addMonospaceBlock(text: string) {
        return this.addText("```"+text+"```");
    }

    addLink(link:string, displayText:string|null)
    {
        const full = `<${link}${(displayText ? '|' + displayText : '')}>`
        return this.addText(full);
    }

    addMention(userId: string) {
        return this.addText(`<users/${userId}>`)
    }

    addMentionAll(prependText:string|null, appendText:string|null)
    {
        return this.addText(`${prependText??''}<users/all>${appendText??''}`);
    }

    render() {
        return {
            'text': this.message
        }
    }
}