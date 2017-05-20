Very simple chrome extension for Last.FM. Using the plainest JS I can in case there are issues with modern JS support.

The delete scrobble button was moved in the redesign last year to be under a drop down menu. As the system frequently will record things as being played which weren't, this is pretty awkward for tidying up records. This extension scrapes the button and its respective form from the drop down menu and plants it roughly in the same location it used to be.

The code currently runs on every last.fm library page which may have deletion options (URLs specified in the manifest) and only makes changes on pages which do have them. The code breaks early when it realises you're on a page where you do not have deletion privileges but probably could be improved.


Things to do:
- Design an icon
- Style the button to behave exactly like the old one
- Add a pop up form to ensure it only checks on pages with your username
