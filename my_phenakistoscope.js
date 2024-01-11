const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("heart_circle" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(heart_circle);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(heart_circle);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
}

function faces(x, y, animation, pScope){
  pScope.draw_image("heart_circle",x,y);
  scale(animation.frame*2);

}
