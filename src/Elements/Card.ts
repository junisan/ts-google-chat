import {ICard, ICardConstructor, ICardResult, ISection} from "../types";

export class Card implements ICard{
    private readonly title?: string;
    private readonly subTitle?: string;
    private readonly imageUrl?: string;
    private readonly square: boolean;

    private sections: ISection[];


    constructor(options: ICardConstructor) {
        this.title = options.title;
        this.subTitle = options.subTitle;
        this.imageUrl = options.imageUrl;
        this.square = options.square ?? true;
        this.sections = options.sections ?? []
    }

    addSection(section: ISection) {
        this.sections.push(section);
    }

    addSections(sections: ISection[]) {
        this.sections.push(...sections);
    }

    render(): ICardResult {
        const sections = this.sections.map(section => section.render());
        return {
            'header': {
                "title": this.title,
                "subtitle": this.subTitle,
                "imageUrl": this.imageUrl,
                "imageStyle": this.square ? 'IMAGE' : 'AVATAR'
            },
            'sections': sections
        }
    }
}