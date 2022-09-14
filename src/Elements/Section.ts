import {ISection, ISectionResult, IWidget} from "../types";
import {AbstractButton} from "./AbstractButton";

export class Section implements ISection {
    private widgets: IWidget[];

    constructor(widgets?:IWidget[]) {
        this.widgets = widgets ?? [];
    }

    addWidget(widget: IWidget) {
        this.widgets.push(widget);
    }

    addWidgets(widgets: IWidget[]) {
        this.widgets.push(...widgets);
    }

    render(): ISectionResult {
        const widgets = this.widgets.map(
            widget => {
                if (widget instanceof AbstractButton) {
                    console.warn('Buttons may be not rendered')
                }
                return widget.render();
            }
        );

        return {
            "widgets": widgets
        }
    }

}