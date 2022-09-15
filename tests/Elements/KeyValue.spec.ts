import {expect} from "chai";
import 'mocha';
import {describe} from "mocha";
import {Icon, ImageButton, KeyValue, TextButton} from "../../dist";


describe('KeyValue', () => {
    it('should set parameters and format them', function () {
        const keyValue = new KeyValue({
            topLabel: 'TOP',
            content: 'Content',
            bottomLabel: 'Bottom',
            multiLine: true,
            link: 'link',
            icon: new Icon('TRAIN'),
            button: new TextButton('text', 'link')
        });

        const rendered = keyValue.render();

        expect(rendered).to.be.an('object');
        expect(rendered).to.have.property('keyValue');
        expect(rendered.keyValue).to.be.an('object');

        expect(rendered.keyValue.topLabel).to.be.eql('TOP');
        expect(rendered.keyValue.content).to.be.eql('Content');
        expect(rendered.keyValue.bottomLabel).to.be.eql('Bottom');
        expect(rendered.keyValue.contentMultiline).to.be.eql(true);

        expect(rendered.keyValue.onClick).to.be.not.null;
        expect(rendered.keyValue.icon).to.be.not.null;
        expect(rendered.keyValue.button).to.be.not.null;


    });

    it('should override parameters with setter and fetch with getter', ()=> {
        const keyValue = new KeyValue({
            topLabel: 'TOP',
            content: 'Content',
            bottomLabel: 'Bottom',
            multiLine: true,
            link: 'link',
            icon: new Icon('TRAIN'),
            button: new TextButton('text', 'link')
        });

        const newIcon = new Icon('STAR');
        const newButton = new ImageButton('url', 'link');
        keyValue.topLabel = 'newTop';
        keyValue.content = 'newContent';
        keyValue.bottomLabel = 'newBottom';
        keyValue.multiLine = false;
        keyValue.link = 'newLink';
        keyValue.icon = newIcon;
        keyValue.button = newButton;

        expect(keyValue.topLabel).to.be.eql('newTop');
        expect(keyValue.content).to.be.eql('newContent');
        expect(keyValue.bottomLabel).to.be.eql('newBottom');
        expect(keyValue.multiLine).to.be.eql(false);
        expect(keyValue.link).to.be.eql('newLink');
        expect(keyValue.icon).to.be.eql(newIcon);
        expect(keyValue.button).to.be.eql(newButton);
    });
});