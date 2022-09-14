import { ITextButton } from "../types";
import { AbstractButton } from "./AbstractButton";
export declare class TextButton extends AbstractButton implements ITextButton {
    private readonly text;
    constructor(text: string, link: string);
    render(): {
        textButton: {
            text: string;
            onClick: {
                openLink: {
                    url: string;
                };
            };
        };
    };
}
