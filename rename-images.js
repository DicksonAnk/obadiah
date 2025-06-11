const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'public', 'images');

// Get all files in the images directory
fs.readdir(imageDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter only image files
  const imageFiles = files.filter(file => 
    file.toLowerCase().endsWith('.jpg') || 
    file.toLowerCase().endsWith('.jpeg') || 
    file.toLowerCase().endsWith('.png')
  );

  // Rename each file
  imageFiles.forEach((file, index) => {
    const oldPath = path.join(imageDir, file);
    const extension = path.extname(file);
    const newPath = path.join(imageDir, `image${index + 1}${extension}`);

    fs.rename(oldPath, newPath, err => {
      if (err) {
        console.error(`Error renaming ${file}:`, err);
      } else {
        console.log(`Renamed ${file} to image${index + 1}${extension}`);
      }
    });
  });
}); 