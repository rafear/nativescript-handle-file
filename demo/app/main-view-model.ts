import {Observable} from 'data/observable';
import {HandleFile} from 'nativescript-handle-file';

export class HelloWorldModel extends Observable {
  public message: string;
  private handleFile: HandleFile;

  constructor() {
    super();

    this.handleFile = new HandleFile();
    this.message = this.handleFile.message;
  }
}