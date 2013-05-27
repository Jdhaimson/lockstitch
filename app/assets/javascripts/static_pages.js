function slideshowInit() {
  var pics = ["whiskey.jpg","comfort.jpg","bethere.jpg"];
  var current = 0;
  setInterval( function() {
    current++;
    if (current >= pics.length) {
      current = 0;
    }

    var url = "url('assets/" + pics[current] + "')";
    $('#slideshow').animate({opacity: 0},250, function() {
      $(this).css('background-image', url).animate({opacity: 1},250);
    });
  },5000);
}

function test() {
  alert('hello');
}
