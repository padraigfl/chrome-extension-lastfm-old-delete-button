var get_delete_form = function(scrobble_row){
  var drop_down_forms = scrobble_row
    .getElementsByClassName('chartlist-more-menu')[0]
    .getElementsByTagName('form');
  for(var i = 0; i < drop_down_forms.length; i++){
    if(drop_down_forms[i].getAttribute('action').indexOf('unscrobble')!== -1){
      var delete_form = drop_down_forms[i].cloneNode(true);
      var delete_button = delete_form
          .getElementsByClassName('mimic-link dropdown-menu-clickable-item')[0];
      delete_button.innerHTML = '╳';
      delete_button.title = 'Delete Scrobble';
      return delete_form;
    }
  }
  return null;
}

var scrobbles = document.getElementsByClassName('js-link-block js-focus-controls-container');

for(var i_scrob = 0; i_scrob < scrobbles.length; i_scrob++){
  var placement_cell = document.createElement('TD')
  placement_cell.className ='chrome-extension-delete';
  var delete_button = get_delete_form(scrobbles[i_scrob]);
  if (delete_button !== null){
    placement_cell.appendChild(delete_button);
    scrobbles[i_scrob].appendChild(placement_cell);
  }else{
    break; //absolutely no reason going through the whole page if it's not your library page
  }
}




// `<td><form method="POST" data-ajax-form="" action="/user/pbdum/unscrobble">
//                             <input type="hidden" name="csrfmiddlewaretoken" value="ken2s0vrJEkj4Fc28osVaPe4l5pazSmA">
//                             <input type="hidden" name="artist_name" value="The National">
//                             <input type="hidden" name="track_name" value="Sorrow">
//                             <input type="hidden" name="timestamp" value="1495259503">
//                             <button type="submit" class="mimic-link dropdown-menu-clickable-item" data-ajax-form-sets-state="deleted">
//                                 Delete scrobble
//                             </button>
//                         </form></td>`
