import {expect} from "chai";
import 'mocha';
import {describe} from "mocha";
import {Icon} from "../../src";


describe('Icon', () => {
    it('should set and get icon', function () {
        const icon = new Icon('TICKET');

        expect(icon.getIcon()).to.be.eq('TICKET');
    })
});