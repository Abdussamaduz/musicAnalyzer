const mm = require('music-metadata')
const audioFiles = document.querySelector(".audio")
function parseFiles(audioFiles) {
  
  const audioFile = audioFiles.shift();
  
  if (audioFile) {
    return mm.parseFile(audioFile).then(metadata => {
      // Do great things with the metadata
      return parseFiles(audioFiles); // process rest of the files AFTER we are finished
    })
  }
  
  return Promise.resolve();
}