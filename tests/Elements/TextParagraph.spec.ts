import {expect} from "chai";
import 'mocha';
import {describe} from "mocha";
import {TextParagraph} from "../../dist";


describe('TextParagraph', () => {
    it('should set Text and format it', function () {
        const paragraph = new TextParagraph('My TeXt');

        expect(paragraph.getText()).to.be.eq('My TeXt');
        const rendered = paragraph.render();

        expect(rendered).to.be.an('object');
        expect(rendered).to.have.property('textParagraph');
        expect(rendered.textParagraph).to.have.property('text');
        expect(rendered.textParagraph.text).to.be.eql('My TeXt');
    });

    it('should override text when use setter', function () {
        const paragraph = new TextParagraph('My TeXt');
        paragraph.setText('NeW TExt');

        expect(paragraph.getText()).to.be.eq('NeW TExt');
        const rendered = paragraph.render();

        expect(rendered).to.be.an('object');
        expect(rendered).to.have.property('textParagraph');
        expect(rendered.textParagraph).to.have.property('text');
        expect(rendered.textParagraph.text).to.be.eql('NeW TExt');
    });

});