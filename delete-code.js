// The DOM element we're focusing on
var scrobblelist = document.getElementsByClassName('tracklist-section')[0];

// pulls existing form for deleting associated scrobble from dropdown menu
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

// plugs a duplicate of the pulled form into the table
var insert_delete_forms = function(){
  var scrobbles = document.getElementsByClassName('js-link-block js-focus-controls-container');

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

// adds listeners to a variety of navigation links so as to trigger extension on page change
var addNextListeners = function(){
  var paginationLinks = document
    .getElementsByClassName("pagination")[0]
    .getElementsByTagName("a");
  for(var i=0; i<paginationLinks.length; i++){
    paginationLinks[i].addEventListener("click", function(){
      setTimeout(waitForNewResults, 1000);
    });
  }
}

// checks if injected buttons exist, if yes then components haven't reloaded yet
var waitForNewResults = function(){
  var verifier = document.getElementsByClassName('chrome-extension-delete').length;
  if(verifier !== 0){
    setTimeout(waitForNewResults, 1000);
  }
  else{
    runWhenReady();
  }
}

var runWhenReady = function(){
  scrobblelist.ready = insert_delete_forms();
  setTimeout(addNextListeners, 1000);
}

runWhenReady();
