background(89, 216, 255);
var drawfish = function(x, y, bL, bH,col) {
var centerX = x;
var centerY = y;
var bodyLength = bL;
var bodyHeight = bH;
var bodyColor = color(col, 0, 255);

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};
var xPos = [];
var yPos = [];
var colornum = [];
var draw = function() {
    drawfish(200,60,80,100);
    for(var i=0; i< xPos.length; i++){
        drawfish(xPos[i],yPos[i], 80,100, colornum[i]);
    }
    noLoop();
};
var mouseClicked = function(){
 xPos[xPos.length] = mouseX;
 yPos[yPos.length] = mouseY;
 colornum[colornum.length] = random()*255;
redraw();
};
      
