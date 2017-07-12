import {Observable, EventData} from 'data/observable';
import {HandleFile} from 'nativescript-handle-file';
import * as permissions from 'nativescript-permissions';

export class HelloWorldModel extends Observable {
  public message: string;
  private handleFile: HandleFile;

  constructor() {
    super();
    // permissions.requestPermission(global.android.Manifest.permission.WRITE_EXTERNAL_STORAGE, "I need these permissions because I'm cool")
    //       .then(function() {
    //           console.log("Woo Hoo, I have the power!");
    //       })
    //       .catch(function() {
    //           console.log("Uh oh, no permissions - plan B time!");
    //       });
    this.handleFile = new HandleFile();
    // this.message = this.handleFile.message;
  }


  public checkMp3(event: EventData) {
      this.handleFile.open({
          name: "india-national-anthem.mp3",
        url: "http://www.sample-videos.com/audio/mp3/india-national-anthem.mp3",
        title: "Teste de download",
        directory: "downloads"
      })
  }

    public checkPdf(event: EventData) {
        this.handleFile.open({
            name: "PDF-example.pdf",
            url: "http://www.sample-videos.com/pdf/Sample-pdf-5mb.pdf",
            title: "Teste de download",
            directory: "downloads"
        })
    }

    public checkXls(event: EventData) {
        this.handleFile.open({
            name: "XLS-example.xls",
            url: "http://www.sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls",
            title: "Teste de download",
            directory: "downloads"
        })
    }

    public checkMp4(event: EventData) {
        this.handleFile.open({
            name: "MP4-example.mp4",
            url: "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_5mb.mp4",
            title: "Teste de download",
            directory: "downloads"
        })
    }

    public checkPng(event: EventData) {
        this.handleFile.open({
            name: "PNG-example.png",
            url: "https://logodownload.org/wp-content/uploads/2015/05/internacional-porto-alegre-logo-escudo-3.png",
            title: "Teste de download",
            directory: "downloads"
        })
    }







}