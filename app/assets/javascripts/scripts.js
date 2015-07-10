//require _magnify
//require _followpointer

$(document).ready(function(){

  $('.embed-button').click(function(){

    var post = $(this).parents('.embed');
    var progressbar = post.find('.embed-progressbar');

    var progress_full  = function() { progressbar.css('width', '100%'); }
    var progress_empty = function() { progressbar.css('width', '0%'); }

    var hide_progressbar = function() {
      if (post.hasClass('has-attach')) {
        post.addClass('is-switching');
      }
    }

    var change_to_attach = function() {
      if (post.hasClass('has-attach')) {
        post.addClass('is-attach');
        post.removeClass('is-switching');
      }
    }

    var change_to_repeat = function() {
      if (post.hasClass('has-attach')) {
        post.addClass('is-played');
        post.removeClass('is-playing is-attach');
      }
    }

    if (post.hasClass('is-default')) {
      post.removeClass('is-default').addClass('is-playing');

      setTimeout(progress_full,200);
      setTimeout(hide_progressbar,8200);
      setTimeout(progress_empty,8200);
      setTimeout(change_to_attach,9000);
      setTimeout(progress_full,9200);
      setTimeout(change_to_repeat,20000);
    }
    else if (post.hasClass('is-playing')) {
      post.removeClass('is-playing').addClass('is-default');
    }
    else if (post.hasClass('is-played')) {
      setTimeout(hide_progressbar,0);
      setTimeout(progress_empty,100);

      setTimeout(function() {
        post.removeClass('is-played').addClass('is-playing');
        post.removeClass('is-switching');
      },1000)

      setTimeout(progress_full,1200);
      setTimeout(change_to_repeat,9000);
    }

  })

})
