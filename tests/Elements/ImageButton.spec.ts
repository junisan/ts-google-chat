import {expect} from "chai";
import 'mocha';
import {describe} from "mocha";
import {ImageButton} from "../../dist";


describe('ImageButton', () => {
    it('should set ImageUrl and Url and format it', function () {

        const button = new ImageButton('http://myImage.png', 'http://google.es');

        const rendered = button.render();
        const expected = {
            "imageButton": {
                "iconUrl": 'http://myImage.png',
                "onClick": {
                    "openLink": {
                        "url": 'http://google.es'
                    }
                }
            }
        }

        expect(rendered).to.be.eql(expected);
    });
});