import { GoogleChatSenderConstructorOptions, GoogleChatSuccessResponse, IGoogleMessage } from "../types";
export declare class GoogleChatSender {
    private readonly url;
    private client;
    constructor(options: GoogleChatSenderConstructorOptions);
    send(message: IGoogleMessage): Promise<GoogleChatSuccessResponse | undefined>;
}
