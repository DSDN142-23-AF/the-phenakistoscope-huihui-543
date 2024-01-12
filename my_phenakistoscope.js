const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(10);
  pScope.load_image_sequence("cupid" , "png", 10);
  pScope.load_image("heart" , "png");
}

function setup_layers(pScope){
 
  new PLayer(null, 100, 300, 300);  //lets us draw the whole circle background, ignoring the boundaries

  var cupidSequence = new PLayer(cupidLayer);
  cupidSequence.mode( SWIRL(2) );
  cupidSequence.set_boundary(200, 950);

  var layer2 = new PLayer(heartLayer);
   layer2.mode( SWIRL (1) );
   layer2.set_boundary( 0, 1100 );

var flower = new PLayer(flowerLayer);
flower.set_boundary(0, 200);
}

function flowerLayer(x, y, pScope) {
  drawflower(x, y, 100);
}
function cupidLayer(x, y, animation, pScope){
  pScope.draw_image_from_sequence("cupid", 0, -50, animation.frame);
}
function heartLayer(x, y, animation, pScope){
  pScope.draw_image("heart",300,1000);
  rotate(360*animation.frame);
}
function drawflower(x, y, size) {
  fill(255, 0, 0); // red
  beginShape();
  vertex(x + size / 5, y + size / 100); // 
  bezierVertex(x - size / 10, y - size / 2, x - size / 4, y - size, x + size / 2, y - size);
  bezierVertex(x + size * 2, y - size, x + size * 1.5, y - size / 2, x + size / 2, y + size / 4); // 
  endShape(CLOSE);
}






