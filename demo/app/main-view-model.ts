import {Observable, EventData} from 'data/observable';
import {HandleFile} from 'nativescript-handle-file';

export class HelloWorldModel extends Observable {
  public message: string;
  private handleFile: HandleFile;

  constructor() {
    super();

    this.handleFile = new HandleFile();
    this.message = this.handleFile.message;
  }


  public checkMp3(event: EventData) {
      this.handleFile.open({
          name: "india-national-anthem.mp3",
        url: "http://www.sample-videos.com/audio/mp3/india-national-anthem.mp3",
        title: "",
        directory: ""
      })
  }
}