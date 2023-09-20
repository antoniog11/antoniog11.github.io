// Javascript for Fourier Post

// initialize empty array
let imgArray = [];
let currentSlice = 0;

fetch('../../assets/projects/fourier-visualization/image.json')
  .then(response => response.json())
  .then(data=> {
    // `data` will contain the JavaScript representation of your array
    //imgArray = data.flat(2);
    imgArray = data;
  });

function setup() {
  createCanvas(240, 240);
}

function draw() {
  background(0);
  
  if (imgArray) {
    let slice = imgArray[currentSlice];
    for (let i = 0; i < slice.length; i++) {
      for (let j = 0; j < slice[i].length; j++) {
        let value = slice[i][j];
        let x = map(j, 0, slice[i].length, 0, width);
        let y = map(i, 0, slice.length, 0, height);
        fill(value); // Assuming value represents grayscale color
        rect(x, y, 1, 1);
      }
    }
  }
}



// let sketch1 = function(p) {
//   let img1;

//   p.preload = function() {
//       img1 = p.loadImage('/assets/images/ecg.png');
//       FFT2D(img1);
//   }

//   p.setup = function() {
//       img1.filter(p.GRAY);
//       p.createCanvas(400, 400);
//       p.image(img1, 0, 0, p.width, p.height);
//   }


// }

// let sketch2 = function(p) {
//   let img2;

//   p.preload = function() {
//       img2 = p.loadImage('/assets/images/ecg.png');
//   }

//   p.setup = function() {
//       p.createCanvas(400, 400);
//       p.image(img2, 0, 0, p.width, p.height);
//   }
// }

// new p5(sketch1, 'canvasContainer1');
// new p5(sketch2, 'canvasContainer2');


// function FFT2D(image) {
//   console.log(image.height,image.width);
//   console.log(image);
// }

// Define variables to keep track of current slice
// let currentSlice = 0;

// function setup() {
//   createCanvas(300, 300); // Set canvas size
//   noLoop(); // Don't continuously redraw the canvas
// }

// function drawSlice(sliceIndex) {
//   background(255); // Clear the canvas
//   const slice = imgArray[sliceIndex];
//   const rows = slice.length;
//   const cols = slice[0].length;
//   const spacing = width / cols;

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const value = slice[i][j];
//       fill(value * 10); // Adjust color based on array value
//       rect(j * spacing, i * spacing, spacing, spacing);
//     }
//   }
// }

// function keyPressed() {
//   if (keyCode === LEFT_ARROW && currentSlice > 0) {
//     currentSlice--;
//     drawSlice(currentSlice);
//   } else if (keyCode === RIGHT_ARROW && currentSlice < threeDArray.length - 1) {
//     currentSlice++;
//     drawSlice(currentSlice);
//   }
// }

// function draw() {
//   drawSlice(currentSlice);
// }
