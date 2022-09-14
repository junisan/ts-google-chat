import {IImage, IImageResult} from "../types";

export class Image implements IImage {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    setImageUrl(url: string) {
        this.url = url;
        return this;
    }

    getImageUrl(): string {
        return this.url;
    }

    render(): IImageResult {
        return {
            "image" : {
                "imageUrl": this.url
            }
        }
    }

}