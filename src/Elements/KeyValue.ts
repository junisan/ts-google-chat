import {Icon} from "./Icon";
import {ButtonType, IKeyValue, IKeyValueOptions, IKeyValueResult} from "../types";

export class KeyValue implements IKeyValue {
    private _topLabel?:string;
    private _content?:string;
    private _bottomLabel?:string;
    private _multiLine?:boolean;
    private _link?:string;
    private _icon?:Icon;
    private _button?:ButtonType;

    constructor(options: IKeyValueOptions) {
        this._topLabel = options.topLabel;
        this._content = options.content;
        this._bottomLabel = options.bottomLabel;
        this._multiLine = options.multiLine;
        this._link = options.link;
        this._icon = options.icon;
        this._button = options.button;
    }

    render(): IKeyValueResult {

        const result: IKeyValueResult = {
            "keyValue": {
                "topLabel": this._topLabel,
                "content": this._content,
                "contentMultiline": this._multiLine,
                "bottomLabel": this._bottomLabel,
                "icon": this._icon?.getIcon(),
                "button": this._button?.render(),
            }
        }

        if (this._link) {
            result.keyValue.onClick = {
                "openLink" : {
                    "url": this._link
                }
            }
        }

        return result;
    }

    get topLabel(): string | undefined {
        return this._topLabel;
    }

    set topLabel(value: string | undefined) {
        this._topLabel = value;
    }

    get content(): string | undefined{
        return this._content;
    }

    set content(value: string | undefined) {
        this._content = value;
    }

    get bottomLabel(): string | undefined {
        return this._bottomLabel;
    }

    set bottomLabel(value: string | undefined) {
        this._bottomLabel = value;
    }

    get multiLine(): boolean | undefined {
        return this._multiLine;
    }

    set multiLine(value: boolean | undefined) {
        this._multiLine = value;
    }

    get link(): string | undefined {
        return this._link;
    }

    set link(value: string | undefined) {
        this._link = value;
    }

    get icon(): Icon | undefined {
        return this._icon;
    }

    set icon(value: Icon | undefined) {
        this._icon = value;
    }

    get button(): ButtonType | undefined {
        return this._button;
    }

    set button(value: ButtonType|undefined) {
        this._button = value;
    }

}