import {ITextButton} from "../types";
import {AbstractButton} from "./AbstractButton";

export class TextButton extends AbstractButton implements ITextButton{
    private readonly text:string;

    constructor(text:string, link: string) {
        super(link);
        this.text = text;
    }

    render() {
        return {
            "textButton": {
                "text": this.text,
                "onClick": {
                    "openLink": {
                        "url": this.getLink()
                    }
                }
            }
        }
    }

}