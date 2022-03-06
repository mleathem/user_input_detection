/*
Detect if Keyboard is being used for navigation - Note: assumes keys for navigation are: tab / arrows / enter
recommended to also add html.js ( js_html_class.js )

CSS use:
  body[data-ux-accessibility]  // user probably using keyboard for NAV
  html.js body:not([data-ux-accessibility])  // user not used keyboard for NAV (so far!)
*/

// listen for key events:
document.addEventListener('keyup', keyDetect);

function keyDetect(e) {
  // tab 9
  // enter 13
  // left arrow	37
  // up arrow	38
  // right arrow	39
  // down arrow	40

  // report suspected keyboard use for navigation to body
  if (['Tab','ArrowRight','ArrowDown','Enter'].indexOf(e.code) > -1) {
    document.body.setAttribute('data-ux-accessibility', true);
  }
}
