import { IImage, IImageResult } from "../types";
export declare class Image implements IImage {
    private url;
    constructor(url: string);
    setImageUrl(url: string): this;
    getImageUrl(): string;
    render(): IImageResult;
}
