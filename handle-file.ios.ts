import * as fs from "file-system";
import * as application from "application";
import * as http from "http";
import * as utils from "tns-core-modules/utils/utils";
import {Common} from './handle-file.common';

export interface Params {
    url: string;
    name: string;
    title?: string;
    directory?: string;
}

export class HandleFile extends Common {
    readonly directories = {
        "downloads" : "downloads",
        "pictures" : "pictures",
        "movies": "movies",
        "music": "music"
    };

    /**
     *
     * @param Params params
     */
    public open(params: Params): void {

        // let directoryDestiny: string = params.directory == undefined ? this.directories["downloads"] : this.directories[params.directory];
        // let androidDownloadsPath: any = global.android.os.Environment.getExternalStoragePublicDirectory(directoryDestiny).toString();
        // let filePath: string = fs.path.join(androidDownloadsPath, params.name);
        // , filePath

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