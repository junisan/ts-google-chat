import {Icon} from "./Icon";
import {IIconButton} from "../types";
import {AbstractButton} from "./AbstractButton";

export class IconButton extends AbstractButton implements IIconButton{
    private readonly icon:Icon;

    constructor(icon: Icon, link: string) {
        super(link);
        this.icon = icon;
    }

    render() {
        return {
            "imageButton": {
                "icon": this.icon.getIcon(),
                "onClick": {
                    "openLink": {
                        "url": this.getLink()
                    }
                }
            }
        }
    }
}