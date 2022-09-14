import { ITextParagraph } from "../types";
export declare class TextParagraph implements ITextParagraph {
    private text;
    constructor(text: string);
    setText(text: string): this;
    getText(): string;
    render(): {
        textParagraph: {
            text: string;
        };
    };
}
