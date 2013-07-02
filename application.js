/* 
 * What are the objects in this exercise?
 * What are their properties and methods?
 * How do your objects interact with their respective DOM elements?
 */
$(document).ready(function() {

$('.item').draggable({
  helper: "clone"
});

$('#grocery_list').droppable({
  // accept: ".item",
  drop: function(event,ui) {
    init_item = ui.draggable.clone();
    console.log(init_item);
    ui.draggable.addClass("ui-droppable");
    $('.new_item').append(init_item)
  }
});



});

