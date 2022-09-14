import { ISection, ISectionResult, IWidget } from "../types";
export declare class Section implements ISection {
    private widgets;
    constructor(widgets?: IWidget[]);
    addWidget(widget: IWidget): void;
    addWidgets(widgets: IWidget[]): void;
    render(): ISectionResult;
}
