import {expect} from "chai";
import 'mocha';
import {describe} from "mocha";
import {GoogleChatSender, SimpleMessage} from "../../dist";

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


describe('GoogleChatSender', () => {
    it('should make request and parse response', async function () {
        const client = axios.create();
        const mock = new MockAdapter(client);
        const data = { success: true };
        mock.onPost('http://localhost/aaaaa').reply(200, data);

        const message = new SimpleMessage('test');
        const sender = new GoogleChatSender({url: 'http://localhost/aaaaa', axiosInstance: client});

        const response = await sender.send(message);
        expect(response).to.be.eql({success: true});
    });
});