import * as fs from "file-system";
import * as http from "http";
import * as utils from "tns-core-modules/utils/utils";
import { Observable } from 'data/observable';

export interface Params {
    url: string;
    name: string;
    title?: string;
    directory?: string;
}

export class HandleFile extends Observable {
    public open(params: Params): void {
        http.getFile(params.url).then((file: fs.File) => {
            try {
                console.dir(file);
                utils.ios.openFile(file.path);
            } catch (e) {
                console.log(e);
            }
        }, function (e: Error): void {
            console.log(e);
        });
    }
}