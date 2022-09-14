import { Icon } from "./Icon";
import { IIconButton } from "../types";
import { AbstractButton } from "./AbstractButton";
export declare class IconButton extends AbstractButton implements IIconButton {
    private readonly icon;
    constructor(icon: Icon, link: string);
    render(): {
        imageButton: {
            icon: string;
            onClick: {
                openLink: {
                    url: string;
                };
            };
        };
    };
}
