import {ButtonType, IButtonGroup} from "../types";

export class ButtonGroup implements IButtonGroup {
    private buttons: ButtonType[];

    constructor(buttons: ButtonType[]) {
        this.buttons = buttons;
    }

    render() {
        const buttons = this.buttons.map(button => button.render());

        return {
            buttons: buttons
        }
    }

}