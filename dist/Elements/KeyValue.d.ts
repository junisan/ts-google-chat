import { Icon } from "./Icon";
import { ButtonType, IKeyValue, IKeyValueOptions, IKeyValueResult } from "../types";
export declare class KeyValue implements IKeyValue {
    private _topLabel?;
    private _content?;
    private _bottomLabel?;
    private _multiLine?;
    private _link?;
    private _icon?;
    private _button?;
    constructor(options: IKeyValueOptions);
    render(): IKeyValueResult;
    get topLabel(): string | undefined;
    set topLabel(value: string | undefined);
    get content(): string | undefined;
    set content(value: string | undefined);
    get bottomLabel(): string | undefined;
    set bottomLabel(value: string | undefined);
    get multiLine(): boolean | undefined;
    set multiLine(value: boolean | undefined);
    get link(): string | undefined;
    set link(value: string | undefined);
    get icon(): Icon | undefined;
    set icon(value: Icon | undefined);
    get button(): ButtonType | undefined;
    set button(value: ButtonType | undefined);
}
