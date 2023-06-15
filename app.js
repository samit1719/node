

const fs = require('fs');






// Deleting a file
fs.unlink('example.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File deleted successfully.');
});
