const { listFilesAsync } = require("./explore");

// Example 1: List all files inside ./src
listFilesAsync("./", function (err, files) {
  //write your code here
});

// Example 2: List only ".js" files
listFilesAsync("./", { ext: ".js" }, function (err, files) {
   //write your code here
});
