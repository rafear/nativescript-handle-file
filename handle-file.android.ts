import * as fs from "file-system";
import * as application from "application";
import * as  http from "http";
import { Observable } from 'data/observable';

export interface Params {
    url: string;
    name: string;
    title?: string;
    directory?: string;
}

export class HandleFile extends Observable {
    readonly directories = {
        "downloads" : android.os.Environment.DIRECTORY_DOWNLOADS,
        "pictures" : android.os.Environment.DIRECTORY_PICTURES,
        "movies": android.os.Environment.DIRECTORY_MOVIES,
        "music": android.os.Environment.DIRECTORY_MUSIC
    };

    public open(params: Params): void {

        let directoryDestiny: string = params.directory == undefined ? this.directories["downloads"] : this.directories[params.directory];
        let androidDownloadsPath: any = global.android.os.Environment.getExternalStoragePublicDirectory(directoryDestiny).toString();
        let filePath: string = fs.path.join(androidDownloadsPath, params.name);
        var title: string = params.title == undefined ? "Open file..." : params.title;

        http.getFile(params.url, filePath).then((file: fs.File) => {
            try {
                let intent = new android.content.Intent(android.content.Intent.ACTION_VIEW);
                let mimeType = this.findExtension(file.extension);
                intent.setDataAndType(android.net.Uri.fromFile(new java.io.File(file.path)), mimeType);
                application.android.currentContext.startActivity(android.content.Intent.createChooser(intent, title));

            } catch (e) {
                console.log(e);
            }
        }, function (e: Error): void {
            console.log(e);
        });
    }

    /**
     * return the correct mimeType
     * @param extension
     * @returns string
     */
    private findExtension(extension: string): string {
        let mimeType = android.webkit.MimeTypeMap.getSingleton();
        return mimeType.getMimeTypeFromExtension(extension.replace(".", "").toLowerCase());
    }
}