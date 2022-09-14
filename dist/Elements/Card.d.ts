import { ICard, ICardConstructor, ICardResult, ISection } from "../types";
export declare class Card implements ICard {
    private readonly title?;
    private readonly subTitle?;
    private readonly imageUrl?;
    private readonly square;
    private sections;
    constructor(options: ICardConstructor);
    addSection(section: ISection): void;
    addSections(sections: ISection[]): void;
    render(): ICardResult;
}
