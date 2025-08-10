const fs = require("fs");
const path = require("path");

// Main function - dirPath = folder/file to start from
function listFilesAsync(dirPath, options, callback) {

  // If options parameter is skipped
  if (typeof options === "function") {
    callback = options;
    options = {};
  }

  //write your code here


}


module.exports = { listFilesAsync };
