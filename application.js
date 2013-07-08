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
 
    drop: function(event,ui) {
      var item = ui.draggable;
      item.draggable('enable');
      init_item = ui.draggable.clone();
      ui.draggable.addClass('ui-draggable');
      $('.new_item').append(init_item);
      var price = parseFloat($('.new_item').find('.item_price').last().text());
      var total = parseFloat($('tfoot').find('#total_cost').text());
      total = total || 0;
      total = total + price;
      $('#total_cost').text(total);
    }


  });



});

