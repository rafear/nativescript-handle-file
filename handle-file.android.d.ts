import { Observable } from 'tns-core-modules/data/observable';
export interface Params {
    url: string;
    name: string;
    title?: string;
    directory?: string;
}
export declare class HandleFile extends Observable {
    readonly directories: {
        "downloads": any;
        "pictures": any;
        "movies": any;
        "music": any;
    };
    open(params: Params): Promise<boolean>;
    private findExtension(extension);
}
