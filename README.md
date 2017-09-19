To install, drag and drop the CRX file into a window with [chrome://extensions/] open. It's possible I may forget to update the CRX file on some updates so double check that it was updated in the most recent commit.

This extension only runs on pages with:
- "*://*.last.fm/user/*/library",
- "*://*.last.fm/user/*/library?page=*",
- "*://*.last.fm/user/*/library/music/*/*/*"
Due to how Last.FM loads new pages, if you don't initially go direct to a matching URL, a hard refresh may be required.

## Problem
The delete scrobble button was moved in the redesign last year to be under a drop down menu. As the system frequently will record things as being played which weren't, this is pretty awkward for tidying up records.

## Solution
An extension which scrapes the button and its respective form from the drop down menu and plants it roughly in the same location it used to be.

## Implementation
A very simple chrome extension for Last.FM. Using the plainest JS I can in case there are issues with modern JS support.
This whole extension depends on the DOM being as it currently is, even minor changes on their end could disrupt functionality.

The code currently runs on every last.fm library page which may have deletion options (URLs specified in the manifest) and only makes changes on pages which do have them.

### Issues
As URL changes don't cause whole page resets, the extension required a hard refresh on each new page after the first one. The current setup uses a pretty simplistic series of loops, checks and listeners to deal with this.

## To do
- Add a user input of some kind to ensure it only checks on pages with your username
- Improve listener implementation
- Switch to more advanced extension optimisations (probably not worth the effort)

