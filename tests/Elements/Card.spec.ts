import {expect} from "chai";
import 'mocha';
import {describe} from "mocha";
import {Card, Section} from "../../dist";


describe('Card', () => {
    it('should set headers and format it', function () {
        const card = new Card({
            title: 'My title',
            subTitle: 'MySubTitle',
            imageUrl: 'myImage.png',
            square: false
        });

        const rendered = card.render();

        expect(rendered).to.have.property('header');
        expect(rendered.header).to.have.property('title').and.to.be.eq('My title');
        expect(rendered.header).to.have.property('subtitle').and.to.be.eq('MySubTitle');
        expect(rendered.header).to.have.property('imageUrl').and.to.be.eq('myImage.png');
        expect(rendered.header).to.have.property('imageStyle').and.to.be.eq('AVATAR');
    });

    it('should add sections and render it', ()=> {
        const section1 = new Section(),
            section2 = new Section(),
            section3 = new Section(),
            section4 = new Section();

        const card = new Card({title: 'card', sections: [section1]});
        card.addSection(section2);
        card.addSections([section3, section4]);

        const rendered = card.render();
        expect(rendered).to.have.property('sections');
        expect(rendered.sections).to.have.lengthOf(4);
    })

});