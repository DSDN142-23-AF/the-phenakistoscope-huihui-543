In the setup_pscope function you will find a few functions that can take
various parameters this file lists the options for each.


pScope.output_mode(....);
    the .... can be replaced with:

    STATIC_FRAME
      STATIC_FRAME is for prototyping your animation by isolating the single wedge.
      it only shows one copy and the bounding box of the wedge. everything is scaled up so you can see it easier.
      This mode DOESNT animate (it is a still frame)

    ANIMATED_FRAME
      ANIMATED_FRAME is for prototyping your animation by isolating the single wedge.
      it only shows one copy and the bounding box of the wedge. everything is scaled up so you can see it easier.
      This mode DOES animate

    STATIC_DISK
      STATIC_DISK outputs the whole phenakistoscope disk.
      This mode DOESNT animate (it is a still frame)

    ANIMATED_DISK
      ANIMATED_DISK outputs the whole animated phenakistoscope disk. This is The
      mode you will likely spend the most time in.
      This mode DOES animate

    OUTPUT_GIF(....)
      OUTPUT_GIF mode will output and download an animated GIF file.
      Replace "...." with the resolution you want ie OUTPUT_GIF(1000) will make a 1000x1000 pixel gif

    OUTPUT_PRINT(print_size)
      OUTPUT_PRINT mode will output a high resolution image that is the correct size for printing.
      This mode requires a second argument that is how big to output.
      print_size can either be:
        A4
        A3


pScope.set_direction(....);
    the .... can be replaced with:

    CW
      when animating rotate the disk clockwise.

    CCW
        when animating rotate the disk counterclockwise.

pScope.load_image("...." , "....");

The first .... is where you type in the name of the image you wish to load.
This image must be placed in the assets folder.

The second ... is the file type. This can be either png or jpg

pScope.draw_image("...",x,y);
You would put this in a function in which you want your image to display.
The first ... is the name of the image you wish to display.
This image must have already been loaded in the load_image function.




pScope.load_image_sequence("...." , "....", ....)
For this to work, your image sequence must be in a folder in the assets folder.
That folder must have the same name as the files in the image sequence.
The images must be named as such: catRun_0.png     catRun_1.png    ....ect and these would be in a folder called catRun.

The first .... is where you type in the name of the image you wish to load.
The second ... is the file type. This can be either png or jpg
The third is the number of images in the sequence


This is used in a pair with pScope.draw_image_from_sequence("....", x, y, n);
draw_image_sequence works much the same as draw_image.
The first variable must match its load_image_sequence pair.
The second and third are the x and y locations.
The last variable, n, is what frame should be displaying (this will most likely be animation.frame)


layer.mode(....)  (found in the setup_layers function)
  the .... can be replaced with:

  SWIRL(swirl_density)
    A swirl animation animates your symbol from the center to the edge of the wedge.
    swirl_density is the number of versions of your symbol.

  RING
    A ring animation only has one of your symbol per wedge, this one symbol initially
    will not be animated, you will need to use the animation variables to animate
    your object manually.


**Animation**

animation.frame

This is a variable that can be used to animate with.
In SWIRL mode animation.frame is 0 in the center of the phenakistoscope and 1 when at the wedge
In RING mode animation.frame is 0 in the first slice, and 1 on the last slice.

animation.wave(...)

the ... can be replaced with any number.

This works much like animation.frame but will start at 1 and end with 1.
The frequency which animation.wave() becomes 0 depends on the number given to it.
