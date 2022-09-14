export abstract class AbstractButton {
    protected readonly link:string;

    protected constructor(link: string) {
        this.link = link;
    }

    protected getLink() {
        return this.link;
    }

    render() {
        throw new Error('You should implement this')
    }
}