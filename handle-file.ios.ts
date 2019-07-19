import * as fs from 'tns-core-modules/file-system';
import * as http from 'tns-core-modules/http';
import * as utils from 'tns-core-modules/utils/utils';
import { Observable } from 'tns-core-modules/data/observable';

export interface Params {
    url: string;
    name: string;
    title?: string;
    directory?: string;
}

export class HandleFile extends Observable {
    public open(params: Params): Promise<boolean> {
        return http.getFile(params.url).then(file => {
            try {
                utils.ios.openFile(file.path);
            } catch (e) {
                console.log(e);
                return false;
            }
            return true;
        }, function (e: Error) {
            console.log(e);
            return false;
        }
        );
    }
}