import {ITextParagraph} from "../types";

export class TextParagraph implements ITextParagraph{
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    setText(text: string) {
        this.text = text;
        return this;
    }

    getText() {
        return this.text;
    }

    render() {
        return {
            "textParagraph": {
                "text": this.text
            }
        }
    }
}