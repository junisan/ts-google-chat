import {expect} from "chai";
import 'mocha';
import {describe} from "mocha";
import { TextButton} from "../../dist";


describe('TextButton', () => {
    it('should set Text and Url and format it', function () {

        const button = new TextButton('My Text', 'https://google.es');

        const rendered = button.render();
        const expected = {
            "textButton": {
                "text": 'My Text',
                "onClick": {
                    "openLink": {
                        "url": 'https://google.es'
                    }
                }
            }
        }

        expect(rendered).to.be.eql(expected);
    });
});