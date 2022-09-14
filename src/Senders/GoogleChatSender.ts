import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import {GoogleChatSenderConstructorOptions, GoogleChatSuccessResponse, IGoogleMessage} from "../types";

export class GoogleChatSender {
    private readonly url: string;
    private client: AxiosInstance;

    constructor(options: GoogleChatSenderConstructorOptions) {
        this.url = options.url;
        this.client = options.axiosInstance ?? axios.create();
    }

    async send(message: IGoogleMessage) {
        const json = JSON.stringify(message.render());

        const request: AxiosRequestConfig = {
            method: 'post',
            url: this.url,
            data: json,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try{
            const response = await this.client.request<GoogleChatSuccessResponse>(request);
            return response.data
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                console.error('Error in Google Chat API', error.response?.data);
            } else {
                console.error(error)
            }

        }

    }
}