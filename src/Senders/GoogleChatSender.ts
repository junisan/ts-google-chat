import * as https from "https";

import {GoogleChatSenderConstructorOptions, GoogleChatSuccessResponse, IGoogleMessage} from "../types";
import {RequestOptions} from "https";

export class GoogleChatSender {
    private readonly url: URL;
    private client;

    constructor(options: GoogleChatSenderConstructorOptions) {
        this.url = new URL(options.url);
        this.client = options.client ?? https;
    }

    send(message: IGoogleMessage): Promise<GoogleChatSuccessResponse> {
        const json = JSON.stringify(message.render());

        const requestOptions: RequestOptions = {
            protocol: 'https:',
            port: 443,

            hostname: this.url.hostname,
            path: this.url.pathname + this.url.search,

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        return new Promise((resolve, reject) => {
            const request = this.client.request(requestOptions, (res) => {
                let data = ''
                res.on('data', (chunk:string) => {
                    data += chunk
                });

                res.on('end', () => {
                    const json = JSON.parse(data);

                    if (res.statusCode && (res.statusCode >= 200 && res.statusCode <= 299)) {
                        resolve(json);
                    } else {
                        reject(json);
                    }

                });

            }).on('error', (error: Error) => {
                console.error(error);
                return reject(error);
            });

            request.write(json);
            request.end();
        });
    }
}