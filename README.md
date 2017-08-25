Very simple chrome extension for Last.FM. Using the plainest JS I can in case there are issues with modern JS support.

The delete scrobble button was moved in the redesign last year to be under a drop down menu. As the system frequently will record things as being played which weren't, this is pretty awkward for tidying up records. This extension scrapes the button and its respective form from the drop down menu and plants it roughly in the same location it used to be.

The code currently runs on every last.fm library page which may have deletion options (URLs specified in the manifest) and only makes changes on pages which do have them.

As URL changes don't cause whole page resets, the extension required a hard refresh on each new page after the first one. The current setup uses a pretty simplistic series of loops and listeners to deal with this. If the extension isn't running correctly for you, the most likely cause is that some of the timeouts aren't optimal for your network.


Things to do:
- Add a user input of some kind to ensure it only checks on pages with your username
- Improve listener implementation

