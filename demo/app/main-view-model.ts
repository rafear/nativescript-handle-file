import {Observable, EventData} from 'data/observable';
import {HandleFile} from 'nativescript-handle-file';
import * as permissions from 'nativescript-permissions';

export class HelloWorldModel extends Observable {
  public message: string;
  private handleFile: HandleFile;

  constructor() {
    super();
    permissions.requestPermission(global.android.Manifest.permission.WRITE_EXTERNAL_STORAGE, "I need these permissions because I'm cool")
          .then(function() {
              console.log("Woo Hoo, I have the power!");
          })
          .catch(function() {
              console.log("Uh oh, no permissions - plan B time!");
          });
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
}