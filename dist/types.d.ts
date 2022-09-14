import { AxiosInstance } from "axios";
import { Icon } from "./Elements/Icon";
export interface IGoogleMessage {
    render: () => Object;
}
export interface ISimpleMessage extends IGoogleMessage {
    render(): {
        text: string;
    };
}
export interface IMessage extends IGoogleMessage {
    render(): {
        "cards": ICardResult[];
    };
}
export interface ICardConstructor {
    title: string | undefined;
    subTitle?: string | undefined;
    imageUrl?: string | undefined;
    square?: boolean;
    sections?: ISection[];
}
export interface ICardResult {
    header?: {
        "title"?: string;
        "subtitle"?: string;
        "imageUrl"?: string;
        "imageStyle": "IMAGE" | "AVATAR";
    };
    sections?: ISectionResult[];
}
export interface ICard {
    render(): ICardResult;
}
export interface ISectionResult {
    widgets: Object[];
}
export interface ISection {
    render(): ISectionResult;
}
export interface ITextButtonResult {
    "textButton": {
        "text": string;
        "onClick": {
            "openLink": {
                "url": string;
            };
        };
    };
}
export interface ITextButton {
    render(): ITextButtonResult;
}
export interface IImageButtonResult {
    "imageButton": {
        "iconUrl": string;
        "onClick": {
            "openLink": {
                "url": string;
            };
        };
    };
}
export interface IImageButton {
    render(): IImageButtonResult;
}
export interface IIconButtonResult {
    "imageButton": {
        "icon": string;
        "onClick": {
            "openLink": {
                "url": string;
            };
        };
    };
}
export interface IIconButton {
    render(): IIconButtonResult;
}
export declare type ButtonType = ITextButton | IImageButton | IIconButton;
export declare type ButtonResultType = ITextButtonResult | IImageButtonResult | IIconButtonResult;
export interface IButtonGroup {
    render(): {
        buttons: ButtonResultType[];
    };
}
export interface IWidgetResult {
}
export interface IWidget {
    render(): IWidgetResult | Object;
}
export interface ITextParagraphResult extends IWidgetResult {
    "textParagraph": {
        "text": string;
    };
}
export interface ITextParagraph extends IWidget {
    render(): ITextParagraphResult;
}
export interface IImageResult extends IWidgetResult {
    "image": {
        "imageUrl": string;
    };
}
export interface IImage extends IWidget {
    render(): IImageResult;
}
export interface IKeyValueOptions {
    topLabel?: string;
    content?: string;
    bottomLabel?: string;
    multiLine?: boolean;
    link?: string;
    icon?: Icon;
    button?: ButtonType;
}
export interface IKeyValueResult extends IWidgetResult {
    keyValue: {
        topLabel?: string;
        content?: string;
        bottomLabel?: string;
        contentMultiline?: boolean;
        icon?: string;
        onClick?: any;
        button?: ButtonResultType;
    };
}
export interface IKeyValue extends IWidget {
    render(): IKeyValueResult;
}
export interface GoogleChatSenderConstructorOptions {
    url: string;
    axiosInstance?: AxiosInstance;
}
export interface GoogleChatSuccessResponse {
    name: string;
    sender: {
        name: string;
        displayName: string;
    };
    space: {
        name: string;
        type: string;
        displayName: string;
    };
}
