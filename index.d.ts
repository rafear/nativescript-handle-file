import { Common } from './handle-file.common';
export interface Params {
    url: string;
    name: string;
    title?: string;
    directory?: string;
}
export declare class HandleFile extends Common {
    // define your typings manually
    // or..
    // use take the ios or android .d.ts files and copy/paste them here
    public open(params: Params): void;
}
