// The DOM element we're focusing on
var scrobblelist = document.getElementsByClassName("tracklist-section")[0];

// pulls existing form for deleting associated scrobble from dropdown menu
var get_delete_form = function(scrobbleRow) {
  var deleteSrc = scrobbleRow.querySelector('[action*="/library/delete"]');
  var deleteCopy = deleteSrc.cloneNode(true);
  var delete_button = deleteCopy.querySelector('button[type="submit"]');
  delete_button.innerHTML = "╳";
  delete_button.title = "Delete Scrobble";
  return deleteCopy;
};

// plugs a duplicate of the pulled form into the table
var insert_delete_forms = function() {
  var scrobbles = document.querySelectorAll("[data-scrobble-row]");

  [...scrobbles].forEach(scrob => {
    var delete_button = get_delete_form(scrob);
    if (delete_button !== null) {
      var placement_cell = document.createElement("TD");
      placement_cell.className = "chrome-extension-delete";
      placement_cell.appendChild(delete_button);
      scrob.appendChild(placement_cell);
    }
  });
};

var addTriggerListener = function(element) {
  element.addEventListener("click", function() {
    setTimeout(waitForNewResults, 1000);
  });
};

// adds listeners to a variety of navigation links so as to trigger extension on page change
var addNextListeners = function() {
  var paginationLinks = document
    .getElementsByClassName("pagination")[0]
    .getElementsByTagName("a");
  if (paginationLinks.length > 0) {
    for (var i = 0; i < paginationLinks.length; i++) {
      addTriggerListener(paginationLinks[i]);
    }
  }
};

// checks if injected buttons exist, if yes then components haven't reloaded yet
var waitForNewResults = function(count) {
  var verifier = document.getElementsByClassName("chrome-extension-delete")
    .length;
  if (verifier !== 0) {
    setTimeout(waitForNewResults, 1000);
  } else {
    runWhenReady();
  }
};

var runWhenReady = function() {
  scrobblelist.ready = insert_delete_forms();
  setTimeout(addNextListeners, 1000);
};

runWhenReady();
