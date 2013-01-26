var sources = [
    {
        "name": "darthVader",
        "src": "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg",
        "level1": {
            "x": 50,
            "y": 50 
        }
    },
    {
        "name": "yoda",
        "src": "http://www.html5canvastutorials.com/demos/assets/yoda.jpg",
        "level1": {
            "x": 500,
            "y": 500
        }
    }
];

// Object to hold all the images after they've been loaded
var loadedImages = {};

var canvas = $('#canvas').get()[0];
var context = canvas.getContext('2d');

// Preloads the images
function loadImages(sources, callback) {
    var numLoadedImages = 0;

    // Loop over each source
    $.each(sources, function() {
        // Get this image's data from the source object
        var imageData = $(this).get()[0];

        // Create an image object to draw to the canvas
        var imageObj = new Image();
        imageObj.src = imageData.src;
        
        // After the image has loaded
        imageObj.onload = function() {
            // Add the image to the loadedImages object
            loadedImages[imageData.name] = {
                "imageObj": imageObj,
                "imageData": imageData
            };

            // If this is the last image
            if ( ++numLoadedImages >= sources.length ) {
                // Run the callback
                callback();
            }
        };
    });
}

// Function to draw all the loaded images with their shadows. This can be run every tick to update the position of the shadows
function drawLoadedImages(level, sunPosition) {
    $.each(loadedImages, function() {
        drawImage($(this).get()[0], level);
        drawShadow($(this).get()[0], level, sunPosition);
    });
}

// Function to draw the image
function drawImage(image, level) {
    context.drawImage(image.imageObj, image.imageData[level].x, image.imageData[level].y); 
}

// Function to draw the shadow
function drawShadow(image, level, sunAngle) {
    // Flip the canvas
    context.scale(1, -1);

    // Draw a reflected image directly underneath the original
    context.drawImage(image.imageObj, image.imageData[level].x, ((-image.imageObj.height * 2) - image.imageData[level].y));

    // Flip the canvas back
    context.scale(1, -1);
}

// Function to calculate the angle of the sun for shadow positioning
function calculateSunAngle(sunPosition, imageX, imageY) {
}

// Initial load
loadImages(sources, function() {
    drawLoadedImages("level1");
});
