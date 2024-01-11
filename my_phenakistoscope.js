const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(10);
  pScope.load_image("heart_circle" , "png");
  pScope.load_image_sequence("cupid" , "png", 10);
}


function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var cupidSequence = new PLayer(cupidLayer);
  cupidSequence.mode( SWIRL(3) );
  cupidSequence.set_boundary( 200, 1000 );

  // var layer2 = new PLayer(squares);
  // layer2.mode( RING );
  // layer2.set_boundary( 0, 400 );
}


function cupidLayer(x, y, animation, pScope){
  pScope.draw_image_from_sequence("cupid", 0, -100, animation.frame);
}


