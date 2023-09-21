const fs = require("fs");
const path = require("path");

function renameFilesInDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const isDirectory = fs.statSync(filePath).isDirectory();

    if (isDirectory) {
      // Recursively process subdirectories
      renameFilesInDirectory(filePath);
    } else if (path.extname(filePath) === ".js") {
      // Check if the file has a .js extension
      const newFilePath = filePath.replace(/\.js$/, ".jsx");

      fs.renameSync(filePath, newFilePath);
      console.log(`Renamed ${filePath} to ${newFilePath}`);
    }
  }
}

// Replace 'your_directory_path' with the actual path to your directory
const directoryPath = "src";

renameFilesInDirectory(directoryPath);
