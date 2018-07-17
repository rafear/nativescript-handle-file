# nativescript-handle-file

This module gives you a tool to download, choose folder to save and then open an app to open file.

## Instalation

```javascript
tns plugin add nativescript-handle-file
```

## Usage 

Import class and instance it.

```typescript
import {HandleFile} from 'nativescript-handle-file';

let handleFile = new HandleFile();
handleFile.open({
    name : "name-of-file.extension",
    url: "path-to-file",
    directory: "directory to save", // only in android [downloads, pictures, movies, music]
    tittle: "title to choose apps" // only in android
}).then(result => {
    //return true if success
})
```
    
## License

Apache License Version 2.0, January 2004
