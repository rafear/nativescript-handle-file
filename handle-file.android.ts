import * as fs from 'tns-core-modules/file-system';
import * as application from 'tns-core-modules/application';
import * as  http from 'tns-core-modules/http';
import { Observable } from 'tns-core-modules/data/observable';

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

    public open(params: Params): Promise<boolean> {
        let directoryDestiny: string = params.directory == undefined ? this.directories["downloads"] : this.directories[params.directory];
        let androidDownloadsPath: any = global.android.os.Environment.getExternalStoragePublicDirectory(directoryDestiny).toString();
        let filePath: string = fs.path.join(androidDownloadsPath, params.name);
        var extension = params.url.split('.').pop();
        var title: string = params.title == undefined ? "Open file..." : params.title;

        return http.getFile(params.url, filePath).then((file: fs.File) => {
            try {
                let intent = new android.content.Intent(android.content.Intent.ACTION_VIEW);
                let mimeType = this.findExtension(extension);
                intent.setDataAndType(android.net.Uri.fromFile(new java.io.File(file.path)), mimeType);
                application.android.currentContext.startActivity(android.content.Intent.createChooser(intent, title));
            } catch (e) {
                console.log(e);
                return false;
            }
            return true;
        }, function (e: Error) {
            console.log(e);
            return false;
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