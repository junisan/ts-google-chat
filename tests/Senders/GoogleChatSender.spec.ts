import {expect, assert} from "chai";
import 'mocha';
import {describe} from "mocha";
import {GoogleChatSender, SimpleMessage} from "../../src";
const nock = require('nock');

describe('GoogleChatSender', () => {
    it('should make request and parse response', async function () {
        const scope = nock('https://chat.googleapis.com')
            .post('/v1/spaces/xxxxxx/messages?key=MYKEY&token=TOKEN')
            .reply(200, {
                success: true
            });

        const message = new SimpleMessage('test');
        const sender = new GoogleChatSender({url: 'https://chat.googleapis.com/v1/spaces/xxxxxx/messages?key=MYKEY&token=TOKEN'});

        const response = await sender.send(message);
        expect(response).to.be.eql({success: true});
    });

    it('should fail if no 200', async function () {
        const scope = nock('https://chat.googleapis.com')
            .post('/v1/spaces/xxxxxx/messages?key=MYKEY&token=TOKEN')
            .reply(403, {fail: true});

        const message = new SimpleMessage('test');
        const sender = new GoogleChatSender({url: 'https://chat.googleapis.com/v1/spaces/xxxxxx/messages?key=MYKEY&token=TOKEN'});

        try{
            const response = await sender.send(message);
            assert.fail('This point should not be reached');
        } catch (e) {
            expect(e).to.be.eql({fail: true});
        }
    });
});