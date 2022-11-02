import {expect} from "chai";
import 'mocha';
import {describe} from "mocha";
import { Image} from "../../src";


describe('Image', () => {
    it('should set ImageUrl and format it', function () {
        const image = new Image('myImage.png');

        expect(image.getImageUrl()).to.be.eq('myImage.png');
        const rendered = image.render();
        const expected = {
            "image": {
                "imageUrl": 'myImage.png'
            }
        }

        expect(rendered).to.be.eql(expected);
    });

    it('should override ImageUrl when use setter', function () {
        const image = new Image('myImage.png');
        image.setImageUrl('myNewImage.jpeg');

        expect(image.getImageUrl()).to.be.eq('myNewImage.jpeg');
        const rendered = image.render();
        const expected = {
            "image": {
                "imageUrl": 'myNewImage.jpeg'
            }
        }

        expect(rendered).to.be.eql(expected);
    });

});