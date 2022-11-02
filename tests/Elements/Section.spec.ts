import {expect} from "chai";
import 'mocha';
import {describe} from "mocha";
import {Image, Section} from "../../src";


describe('Section', () => {
    it('should set Widgets and format it', function () {
        const textButton = new Image('text');
        const textButton2 = new Image('text');

        const section = new Section([textButton, textButton2]);
        const rendered = section.render();

        expect(rendered).to.be.an('object');
        expect(rendered).to.have.property('widgets');
        expect(rendered.widgets).to.have.lengthOf(2);
    });

    it('should add widgets and render it', ()=> {
        const widget1 = new Image('text');
        const widget2 = new Image('text');
        const widget3 = new Image('text');
        const widget4 = new Image('text');

        const section = new Section([widget1]);
        section.addWidget(widget2);
        section.addWidgets([widget3, widget4]);
        const rendered = section.render();

        expect(rendered).to.have.property('widgets');
        expect(rendered.widgets).to.have.lengthOf(4);
    })

});