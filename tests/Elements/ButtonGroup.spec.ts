import {expect} from "chai";
import 'mocha';
import {describe} from "mocha";
import {ButtonGroup, ImageButton, TextButton} from "../../src";


describe('Button Group', () => {
    it('should render buttons', function () {
        const button1 = new TextButton('myText', 'http://google.es');
        const button2 = new ImageButton('http://image.png', 'http://bing.com');

        const buttonGroup = new ButtonGroup([button1, button2]);
        const rendered = buttonGroup.render();

        expect(rendered).to.be.an('object');
        expect(rendered).to.have.property('buttons');
        expect(rendered.buttons).to.have.lengthOf(2);
    });


});