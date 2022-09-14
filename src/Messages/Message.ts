import {ICard, ICardResult, IMessage} from "../types";

export class Message implements IMessage{
    private cards: ICard[] = [];

    constructor(...card: ICard[]) {
        this.cards = card
    }

    addCard(card: ICard) {
        this.cards.push(card);
    }

    addCards(cards: ICard[]) {
        this.cards.push(...cards);
    }

    render() {
        const cardsRendered:ICardResult[] = this.cards.map(card => card.render());

        return {
            'cards': cardsRendered
        }
    }
}