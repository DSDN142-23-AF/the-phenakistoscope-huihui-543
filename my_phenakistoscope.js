const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(10);
  pScope.load_image("heart_circle" , "png");
  pScope.load_image_sequence("cupid" , "png", 10);
  pScope.fill_background(173, 216, 230)
}



function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var cupidSequence = new PLayer(cupidLayer);
  cupidSequence.mode( SWIRL(2) );
  cupidSequence.set_boundary(200, 1000 );

  // var layer2 = new PLayer(squares);
  // layer2.mode( RING );
  // layer2.set_boundary( 0, 400 );

function heartLayer(x, y, pScope) {
  drawHeart(x, y, 100);
}

var heart = new PLayer(heartLayer);
heart.set_boundary(0, 200);
}


function cupidLayer(x, y, animation, pScope){
  pScope.draw_image_from_sequence("cupid", 0, -50, animation.frame);
}

function drawflower(x, y, size) {
  fill(255, 0, 0); // red
  beginShape();
  vertex(x + size / 5, y + size / 100); // 
  bezierVertex(x - size / 10, y - size / 2, x - size / 4, y - size, x + size / 2, y - size);
  bezierVertex(x + size * 2, y - size, x + size * 1.5, y - size / 2, x + size / 2, y + size / 4); // 
  endShape(CLOSE);
}



