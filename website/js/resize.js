$( document ).ready(function() {
  var rows = $('.row');
  for (var i = 0; i < rows.length; i++) {
    var panels = $(rows[i]).children().children().children('.panel-body');
    maxHeight = Math.max.apply(
      Math, panels.map(function() {
        return $(this).height();
    }).get());
    panels.height(maxHeight);
  }  
});
