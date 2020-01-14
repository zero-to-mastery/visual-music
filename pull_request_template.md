### Display Trello task [link](linktoTrello)

### Features/Libraries
What Features libraries added.
- Added new library [detect-file-type](https://www.npmjs.com/package/detect-file-type)
To detect file format. It will check file format base on [file signature](https://en.wikipedia.org/wiki/List_of_file_signatures)
- Added feature that allows user to save screenshot.

### Notes
- react-firebase-file-uploader: is not acting as I except. file uploader invoked callback of my `handleFileSelected` 
function at first time when file selected, but not subsequent file selection. The work around is to rerender file uploader.
