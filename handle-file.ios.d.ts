import { Observable } from 'data/observable';
export interface Params {
    url: string;
    name: string;
    title?: string;
    directory?: string;
}
export declare class HandleFile extends Observable {
    open(params: Params): Promise<boolean>;
}
