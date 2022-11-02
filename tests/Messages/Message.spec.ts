import {expect} from "chai";
import 'mocha';
import {describe} from "mocha";
import {Card, Message} from "../../src";


describe('Message', () => {
    it('should allow add cards and format it', function () {
        const card1 = new Card({title: '1'});
        const card2 = new Card({title: '1'});
        const card3 = new Card({title: '1'});
        const card4 = new Card({title: '1'});

        const message = new Message(card1);
        message.addCard(card2);
        message.addCards([card3, card4]);
        const rendered = message.render();

        expect(rendered).to.have.property('cards');
        expect(rendered.cards).to.have.lengthOf(4);
    });
});