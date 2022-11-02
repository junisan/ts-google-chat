import {expect} from "chai";
import 'mocha';
import {describe} from "mocha";
import {SimpleMessage} from "../../src";


describe('SimpleMessage', () => {
    it('should allow add formatting and render it', function () {
        const message = new SimpleMessage('1');
        message.addText('2');
        message.addBold('3');
        message.addStrike('4');
        message.addItalic('5');
        message.addMonospaceText('6');
        message.addLink('7', '8');
        message.addLine();
        message.addMonospaceBlock('aa');
        message.addMention('user1');
        message.addMentionAll('pre', 'post');
        const rendered = message.render();

        expect(rendered).to.be.an('object').and.have.property('text');
        expect(rendered.text).to.be.eqls('12*3*~4~_5_`6`<7|8>\r\n```aa```<users/user1>pre<users/all>post');
    });
});