import {expect} from "chai";
import 'mocha';
import {describe} from "mocha";
import {Icon, IconButton} from "../../dist";


describe('IconButton', () => {
    it('should set Icon and Url and format it', function () {
        const icon = new Icon('TRAIN');
        const button = new IconButton(icon, 'http://google.es');

        const rendered = button.render();
        const expected = {
            "imageButton": {
                "icon": 'TRAIN',
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