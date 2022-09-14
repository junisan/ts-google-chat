import {IImageButton} from "../types";
import {AbstractButton} from "./AbstractButton";

export class ImageButton extends AbstractButton implements IImageButton{
    private readonly imageUrl:string;

    constructor(imageUrl:string, link: string) {
        super(link);
        this.imageUrl = imageUrl;
    }

    render() {
        return {
            "imageButton": {
                "iconUrl": this.imageUrl,
                "onClick": {
                    "openLink": {
                        "url": this.getLink()
                    }
                }
            }
        }
    }
}