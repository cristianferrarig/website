$(document).ready(function(){

  var native_width = 0;
  var native_height = 0;

  // Now the mousemove function
  $(".followpointer").mousemove(function(e){

    var pointer_follower = $(".followpointer-content");

    // When the user hovers on the image, the script will first calculate
    // the native dimensions if they don't exist. Only after the native dimensions
    // are available, the script will show the zoomed version.
    // if(!native_width && !native_height)
    // {
    //   // This will create a new image object with the same image as that in .small
    //   // We cannot directly get the dimensions from .small because of the
    //   // width specified to 200px in the html. To get the actual dimensions we have
    //   // created this image object.
    //   var image_object = new Image();
    //   image_object.src = $(".followpointer-area").attr("src");
    //   // This code is wrapped in the .load function which is important.
    //   // width and height of the object would return 0 if accessed before
    //   // the image gets loaded.
    //   native_width = image_object.width;
    //   native_height = image_object.height;
    // }
    // else
    // {
      // x/y coordinates of the mouse
      // This is the position of .magnify with respect to the document.

      var magnify_offset = $(this).offset();
      // We will deduct the positions of .magnify from the mouse positions with
      // respect to the document to get the mouse positions with respect to the
      // container(.magnify)
      var mx = e.pageX - magnify_offset.left;
      var my = e.pageY - magnify_offset.top;

      // Finally the code to fade out the glass if the mouse is outside the container
      if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
      {
        pointer_follower.fadeIn(100);
      }
      else
      {
        pointer_follower.fadeOut(100);
      }
      if(pointer_follower.is(":visible"))
      {
        // Time to move the magnifying glass with the mouse

        // Middle pointer
        var px = mx - pointer_follower.width()/2;
        var py = my - pointer_follower.height()/2;
        var pointer_spacing = 12;

        // Bottom right
        px = mx + pointer_spacing;
        py = my + pointer_spacing;

        // Now the glass moves with the mouse
        // The logic is to deduct half of the glass's width and height from the
        // mouse coordinates to place it with its center at the mouse coordinates

        //If you hover on the image now, you should see the magnifying glass in action
        pointer_follower.css({left: px, top: py});
      }
    //}
  })
})