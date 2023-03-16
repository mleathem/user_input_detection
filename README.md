# user_input_detection
Detect User's method of navigation / interaction - accessibility enhancement

Collection of Javascript to enhanced user experience.
Classes are added to HTML and BODY depending on user interaction/navigation

## 💥 Important to apply 'progressive enhancement' philosophy
Only once we can be sure of a user's interaction method / browser properties etc.. 

Use `/js/` scripts as required -  Typical aplication would then be applied in CSS.


```
html.js {
  /* user has JavaScript ebnabled */
}
body[data-ux-accessibility] {
  /* user has used keyboard - pressed keys typically used for navigation */
}

html.js body:not([data-ux-accessibility]) {
  /* user not used keyboard for NAV (so far!) */
}
``` 
