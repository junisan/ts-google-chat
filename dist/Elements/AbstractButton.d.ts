export declare abstract class AbstractButton {
    protected readonly link: string;
    protected constructor(link: string);
    protected getLink(): string;
    render(): void;
}
