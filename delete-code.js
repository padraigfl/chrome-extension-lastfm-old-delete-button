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

var insert_delete_forms = function(){
  var scrobbles = document.getElementsByClassName('js-link-block js-focus-controls-container');
  console.log('last.fm delete button script is running');

  for(var i_scrob = 0; i_scrob < scrobbles.length; i_scrob++){
    var delete_button = get_delete_form(scrobbles[i_scrob]);
    if (delete_button !== null){
      var placement_cell = document.createElement('TD')
      placement_cell.className ='chrome-extension-delete';
      placement_cell.appendChild(delete_button);
      scrobbles[i_scrob].appendChild(placement_cell);
    }else{
      break; //absolutely no reason going through the whole page if it's not your library page
    }
  }
}

var scrobblelist = document.getElementsByClassName('tracklist-section')[0];
scrobblelist.onLoad = insert_delete_forms();


// var paginationhack = document.getElementsByClassName('pagination')[0].getElementsByTagName('a');
// paginationhack[0].addEventListener("click", insert_delete_forms);
// paginationhack[1].addEventListener("click", insert_delete_forms);
// this doesn't work but I'm leaving it in as a reminder it needs an alternative
