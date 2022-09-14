import { IImageButton } from "../types";
import { AbstractButton } from "./AbstractButton";
export declare class ImageButton extends AbstractButton implements IImageButton {
    private readonly imageUrl;
    constructor(imageUrl: string, link: string);
    render(): {
        imageButton: {
            iconUrl: string;
            onClick: {
                openLink: {
                    url: string;
                };
            };
        };
    };
}
