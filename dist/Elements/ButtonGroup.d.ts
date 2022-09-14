import { ButtonType, IButtonGroup } from "../types";
export declare class ButtonGroup implements IButtonGroup {
    private buttons;
    constructor(buttons: ButtonType[]);
    render(): {
        buttons: (import("../types").ITextButtonResult | import("../types").IImageButtonResult | import("../types").IIconButtonResult)[];
    };
}
