# nativescript-handle-file

This module gives you a tool to download, choose folder to save and then open an app to open file.

## Instalation

```
tns plugin add nativescript-handle-file
```

## How to use

This seed expands on several things [presented here](http://developer.telerik.com/featured/creating-nativescript-plugins-in-typescript/).

```typescript
import {HandleFile} from 'nativescript-handle-file';

let handleFile = new HandleFile();
handleFile.open({
    name : "name-of-file.extension",
    url: "path-to-file",
    directory: "directory to save", // only in android [downloads, pictures, movies, music]
    tittle: "title to choose apps" // only in android
})
```
