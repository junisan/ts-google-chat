import { ICard, ICardResult, IMessage } from "../types";
export declare class Message implements IMessage {
    private cards;
    constructor(...card: ICard[]);
    addCard(card: ICard): void;
    addCards(cards: ICard[]): void;
    render(): {
        cards: ICardResult[];
    };
}
