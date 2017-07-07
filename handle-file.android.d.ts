import { Common } from './handle-file.common';
export interface Params {
    url: string;
    name: string;
    title?: string;
    directory?: string;
}
export declare class HandleFile extends Common {
    readonly directories: {
        "downloads": string;
        "pictures": string;
        "movies": string;
        "music": string;
    };
    open(params: Params): void;
    private findExtension(extension);
}
