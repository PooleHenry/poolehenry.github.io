/*  Script for
    poolehenry.github.io/conversions/pixels-to-dimensions.html, and
    poolehenry.github.io/conversions/edge-pieces.html

    I began to write this for the pixels-to-dimensions calculator,
    but I will also use the code for the puzzle edge piece converter,
    since the math is similar.

    If you are thinking of this from a puzzle perspective, the number
    of puzzle pieces is our "pixel count". 
*/


/* INTERFACE FUNCTION

   This function reads the pixel count and aspect ratio from the input boxes.
   It passes these as arguments to the converter function.
   When the converter returns length and width back, this function outputs to the HTML page. */
function buttonPushed(mode) {

    let pixelCount;
    let ratio1;      //corresponds to width
    let ratio2;      //corresponds to height
    let dimensions;  /* the dimensions returned by converter function.
                        it will be a 1x2 array: [length, width]. */


    pixelCount = document.getElementById("pixelCount").value;
    ratio1 = document.getElementById("ratio1").value;
    ratio2 = document.getElementById("ratio2").value;
    mode = document.getElementById("ratio2").value;

    dimensions = converter(pixelCount, ratio1, ratio2);

    // Output 
    if (mode = "image") {
        document.getElementById("results").innerHTML =
            dimensions[0]
            + " by "
            + dimensions[1]
            + " pixels = "
            + (dimensions[0]*dimensions[1])
            + " pixels";

    }

}


/**
 * ---CONVERTER FUNCTION explanation---
 * 
 * In our situation, we are given a total pixel count, pixelCount.
 * That is equal to (width * height).
 * We also know an "aspect" ratio of (width:height).
 * 
 * To express width using pixelCount and height, we could say
 * totalPixels = width * height,     so
 * width = totalPixels/height.
 * 
 * We don't yet know height, but since
 * aspectRatio = width/height,    then
 * height = width/aspectRatio.
 * 
 * Thus,
 * width = pixelCount/(width/aspectRatio).
 * width = (pixelCount*aspectRatio)/width
 * width^2 = (pixelCount*aspectRatio)
 * width = sqrt(pixelCount*aspectRatio)
 * We now have a dimension in terms of known variables!
 * 
 * Using similar math, we find
 * height^2 = (pixelCount/aspectRatio)
 * height = sqrt(pixelCount*aspectRatio)
 *
 * The following function works using this principle.
 */
function converter(pixelCount, ratio1, ratio2, mode) {
    let width;
    let height;
    
    aspectRatio = (ratio1/ratio2);

    width = Math.round(Math.sqrt(pixelCount / aspectRatio));   //nearest integer
    height = Math.round(Math.sqrt(pixelCount * aspectRatio));
    
    return [width, height];

}