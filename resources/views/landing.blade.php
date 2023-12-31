<!DOCTYPE html>
<html lang="en">
  <head>
 
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BINAWA</title>

    <!-- Meta SEO -->
    <meta name="title" content="Binawa" />
  
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />


<style>
    /*
! tailwindcss v3.1.4 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/
html {
  scroll-behavior: smooth;
}
*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #E5E7EB;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured `sans` font-family by default.
*/

html {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured `mono` font family by default.
2. Correct the odd `em` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9CA3AF;
  /* 2 */
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1;
  /* 1 */
  color: #9CA3AF;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9CA3AF;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

.tooltip-arrow,.tooltip-arrow:before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

.tooltip-arrow {
  visibility: hidden;
}

.tooltip-arrow:before {
  content: "";
  visibility: visible;
  transform: rotate(45deg);
}

[data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before {
  border-style: solid;
  border-color: #E5E7EB;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='top'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='right'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='left'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-right-width: 1px;
}

.tooltip[data-popper-placement^='top'] > .tooltip-arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {
  top: -4px;
}

.tooltip[data-popper-placement^='left'] > .tooltip-arrow {
  right: -4px;
}

.tooltip[data-popper-placement^='right'] > .tooltip-arrow {
  left: -4px;
}

.tooltip.invisible > .tooltip-arrow:before {
  visibility: hidden;
}

[data-popper-arrow],[data-popper-arrow]:before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

[data-popper-arrow] {
  visibility: hidden;
}

[data-popper-arrow]:before {
  content: "";
  visibility: visible;
  transform: rotate(45deg);
}

[data-popper-arrow]:after {
  content: "";
  visibility: visible;
  transform: rotate(45deg);
  position: absolute;
  width: 9px;
  height: 9px;
  background: inherit;
}

[role="tooltip"] > [data-popper-arrow]:before {
  border-style: solid;
  border-color: #E5E7EB;
}

.dark [role="tooltip"] > [data-popper-arrow]:before {
  border-style: solid;
  border-color: #4B5563;
}

[role="tooltip"] > [data-popper-arrow]:after {
  border-style: solid;
  border-color: #E5E7EB;
}

.dark [role="tooltip"] > [data-popper-arrow]:after {
  border-style: solid;
  border-color: #4B5563;
}

[data-popover][role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]:before {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]:after {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]:before {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]:after {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]:before {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]:after {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]:before {
  border-top-width: 1px;
  border-right-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]:after {
  border-top-width: 1px;
  border-right-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow] {
  bottom: -5px;
}

[data-popover][role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow] {
  top: -5px;
}

[data-popover][role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow] {
  right: -5px;
}

[data-popover][role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow] {
  left: -5px;
}

[role="tooltip"].invisible > [data-popper-arrow]:before {
  visibility: hidden;
}

[role="tooltip"].invisible > [data-popper-arrow]:after {
  visibility: hidden;
}

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #1C64F2;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6B7280;
  opacity: 1;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #6B7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6B7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

select:not([size]) {
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 0.75em 0.75em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
}

[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
     color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #1C64F2;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked,.dark [type='checkbox']:checked,.dark [type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 0.55em 0.55em;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 0.55em 0.55em;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  background-size: 1em 1em;
}

.dark [type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  background-size: 1em 1em;
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");
  background-color: currentColor;
  border-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 0.55em 0.55em;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px auto inherit;
}

input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::file-selector-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::-webkit-file-upload-button:hover {
  background: #374151;
}

input[type=file]::file-selector-button:hover {
  background: #374151;
}

.dark input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::file-selector-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::-webkit-file-upload-button:hover {
  background: #6B7280;
}

.dark input[type=file]::file-selector-button:hover {
  background: #6B7280;
}

input[type="range"]::-webkit-slider-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-webkit-slider-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-webkit-slider-thumb {
  background: #6B7280;
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1px;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}

input[type="range"]::-moz-range-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-moz-range-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-moz-range-thumb {
  background: #6B7280;
}

input[type="range"]::-moz-range-progress {
  background: #3F83F8;
}

input[type="range"]::-ms-fill-lower {
  background: #3F83F8;
}

.toggle-bg:after {
  content: "";
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  background: white;
  border-color: #D1D5DB;
  border-width: 1px;
  border-radius: 9999px;
  height: 1.25rem;
  width: 1.25rem;
  transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;
  transition-duration: .15s;
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
}

input:checked + .toggle-bg:after {
  transform: translateX(100%);;
  border-color: white;
}

input:checked + .toggle-bg {
  background: #1C64F2;
  border-color: #1C64F2;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.container {
  width: 100%;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.visible {
  visibility: visible;
}

.invisible {
  visibility: hidden;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}

.top-0 {
  top: 0px;
}

.left-0 {
  left: 0px;
}

.bottom-\[60px\] {
  bottom: 60px;
}

.right-0 {
  right: 0px;
}

.bottom-0 {
  bottom: 0px;
}

.z-50 {
  z-index: 50;
}

.z-20 {
  z-index: 20;
}

.z-10 {
  z-index: 10;
}

.z-30 {
  z-index: 30;
}

.z-40 {
  z-index: 40;
}

.col-span-2 {
  grid-column: span 2 / span 2;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-7 {
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
}

.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.mr-3 {
  margin-right: 0.75rem;
}

.ml-1 {
  margin-left: 0.25rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mr-auto {
  margin-right: auto;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.table {
  display: table;
}

.grid {
  display: grid;
}

.hidden {
  display: none;
}

.h-6 {
  height: 1.5rem;
}

.h-9 {
  height: 2.25rem;
}

.h-8 {
  height: 2rem;
}

.h-5 {
  height: 1.25rem;
}

.h-10 {
  height: 2.5rem;
}

.h-12 {
  height: 3rem;
}

.h-4 {
  height: 1rem;
}

.w-full {
  width: 100%;
}

.w-6 {
  width: 1.5rem;
}

.w-5 {
  width: 1.25rem;
}

.w-10 {
  width: 2.5rem;
}

.w-64 {
  width: 16rem;
}

.w-1\/2 {
  width: 50%;
}

.w-4 {
  width: 1rem;
}

.max-w-screen-xl {
  max-width: 1280px;
}

.max-w-2xl {
  max-width: 42rem;
}

.max-w-screen-md {
  max-width: 768px;
}

.max-w-lg {
  max-width: 32rem;
}

.max-w-screen-sm {
  max-width: 640px;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.flex-shrink {
  flex-shrink: 1;
}

.shrink-0 {
  flex-shrink: 0;
}

.-translate-x-full {
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-full {
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-full {
  --tw-translate-y: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-full {
  --tw-translate-y: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform-none {
  transform: none;
}

.cursor-default {
  cursor: default;
}

.cursor-not-allowed {
  cursor: not-allowed;
}

.cursor-pointer {
  cursor: pointer;
}

.resize {
  resize: both;
}

.list-disc {
  list-style-type: disc;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.grid-cols-7 {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.items-baseline {
  align-items: baseline;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-8 {
  gap: 2rem;
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

.space-y-12 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(3rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(3rem * var(--tw-space-y-reverse));
}

.space-y-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));
}

.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}

.space-x-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.25rem * var(--tw-space-x-reverse));
  margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.divide-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(2px * var(--tw-divide-x-reverse));
  border-left-width: calc(2px * calc(1 - var(--tw-divide-x-reverse)));
}

.divide-gray-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-divide-opacity));
}

.place-self-center {
  place-self: center;
}

.self-center {
  align-self: center;
}

.overflow-hidden {
  overflow: hidden;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.border {
  border-width: 1px;
}

.border-0 {
  border-width: 0px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-t {
  border-top-width: 1px;
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-blue-700 {
  --tw-border-opacity: 1;
  border-color: rgb(26 86 219 / var(--tw-border-opacity));
}

.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}

.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}

.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}

.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}

.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.bg-white\/50 {
  background-color: rgb(255 255 255 / 0.5);
}

.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}

.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}

.bg-\[url\(\'\/images\/background\.jpg\'\)\] {
  background-image: url('/images/background.jpg');
}

.bg-\[url\(\'\/background\.jpg\'\)\] {
  background-image: url('/background.jpg');
}

.bg-cover {
  background-size: cover;
}

.bg-fixed {
  background-attachment: fixed;
}

.bg-top {
  background-position: top;
}

.bg-no-repeat {
  background-repeat: no-repeat;
}

.p-2 {
  padding: 0.5rem;
}

.p-6 {
  padding: 1.5rem;
}

.p-4 {
  padding: 1rem;
}

.p-2\.5 {
  padding: 0.625rem;
}

.p-1 {
  padding: 0.25rem;
}

.py-2\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.pl-3 {
  padding-left: 0.75rem;
}

.pr-4 {
  padding-right: 1rem;
}

.pt-20 {
  padding-top: 5rem;
}

.pb-8 {
  padding-bottom: 2rem;
}

.pt-8 {
  padding-top: 2rem;
}

.pt-6 {
  padding-top: 1.5rem;
}

.pr-3 {
  padding-right: 0.75rem;
}

.pl-5 {
  padding-left: 1.25rem;
}

.pt-2 {
  padding-top: 0.5rem;
}

.pt-4 {
  padding-top: 1rem;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1;
}

.font-semibold {
  font-weight: 600;
}

.font-medium {
  font-weight: 500;
}

.font-extrabold {
  font-weight: 800;
}

.font-light {
  font-weight: 300;
}

.font-bold {
  font-weight: 700;
}

.uppercase {
  text-transform: uppercase;
}

.leading-none {
  line-height: 1;
}

.leading-tight {
  line-height: 1.25;
}

.leading-6 {
  line-height: 1.5rem;
}

.leading-9 {
  line-height: 2.25rem;
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.text-purple-500 {
  --tw-text-opacity: 1;
  color: rgb(144 97 249 / var(--tw-text-opacity));
}

.text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}

.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}

.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}

.underline {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.outline {
  outline-style: solid;
}

.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.hover\:border-gray-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.hover\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}

.hover\:bg-purple-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}

.hover\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.hover\:bg-purple-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}

.hover\:bg-blue-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}

.hover\:bg-white:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.hover\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.hover\:text-purple-800:hover {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}

.hover\:text-blue-600:hover {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}

.hover\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

.hover\:underline:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}

.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}

.focus\:ring-purple-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}

.focus\:ring-gray-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));
}

.focus\:ring-gray-100:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(243 244 246 / var(--tw-ring-opacity));
}

.focus\:ring-purple-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(220 215 254 / var(--tw-ring-opacity));
}

.focus\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}

.dark .dark\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity));
}

.dark .dark\:border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.dark .dark\:border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}

.dark .dark\:border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}

.dark .dark\:border-transparent {
  border-color: transparent;
}

.dark .dark\:bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.dark .dark\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}

.dark .dark\:bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.dark .dark\:bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.dark .dark\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}

.dark .dark\:bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}

.dark .dark\:bg-gray-800\/50 {
  background-color: rgb(31 41 55 / 0.5);
}

.dark .dark\:bg-opacity-80 {
  --tw-bg-opacity: 0.8;
}

.dark .dark\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark .dark\:text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.dark .dark\:text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}

.dark .dark\:text-purple-500 {
  --tw-text-opacity: 1;
  color: rgb(144 97 249 / var(--tw-text-opacity));
}

.dark .dark\:text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

.dark .dark\:text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}

.dark .dark\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}

.dark .dark\:hover\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.dark .dark\:hover\:bg-purple-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}

.dark .dark\:hover\:bg-gray-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}

.dark .dark\:hover\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}

.dark .dark\:hover\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.dark .dark\:hover\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark .dark\:hover\:text-purple-700:hover {
  --tw-text-opacity: 1;
  color: rgb(108 43 217 / var(--tw-text-opacity));
}

.dark .dark\:hover\:text-blue-500:hover {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}

.dark .dark\:hover\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.dark .dark\:focus\:ring-gray-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
}

.dark .dark\:focus\:ring-purple-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}

.dark .dark\:focus\:ring-gray-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));
}

.dark .dark\:focus\:ring-purple-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(74 29 150 / var(--tw-ring-opacity));
}

@media (min-width: 640px) {
  .sm\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .sm\:mr-2 {
    margin-right: 0.5rem;
  }

  .sm\:flex {
    display: flex;
  }

  .sm\:h-9 {
    height: 2.25rem;
  }

  .sm\:w-auto {
    width: auto;
  }

  .sm\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\:gap-12 {
    gap: 3rem;
  }

  .sm\:gap-6 {
    gap: 1.5rem;
  }

  .sm\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .sm\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .sm\:text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 768px) {
  .md\:grid {
    display: grid;
  }

  .md\:h-12 {
    height: 3rem;
  }

  .md\:w-12 {
    width: 3rem;
  }

  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .md\:gap-12 {
    gap: 3rem;
  }

  .md\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .md\:p-8 {
    padding: 2rem;
  }

  .md\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .md\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .md\:text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .md\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

@media (min-width: 1024px) {
  .lg\:order-2 {
    order: 2;
  }

  .lg\:order-1 {
    order: 1;
  }

  .lg\:col-span-7 {
    grid-column: span 7 / span 7;
  }

  .lg\:col-span-5 {
    grid-column: span 5 / span 5;
  }

  .lg\:my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .lg\:mr-2 {
    margin-right: 0.5rem;
  }

  .lg\:mr-0 {
    margin-right: 0px;
  }

  .lg\:mt-0 {
    margin-top: 0px;
  }

  .lg\:mb-8 {
    margin-bottom: 2rem;
  }

  .lg\:mb-0 {
    margin-bottom: 0px;
  }

  .lg\:mb-12 {
    margin-bottom: 3rem;
  }

  .lg\:flex {
    display: flex;
  }

  .lg\:grid {
    display: grid;
  }

  .lg\:hidden {
    display: none;
  }

  .lg\:w-auto {
    width: auto;
  }

  .lg\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .lg\:grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .lg\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lg\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .lg\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lg\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .lg\:flex-row {
    flex-direction: row;
  }

  .lg\:justify-center {
    justify-content: center;
  }

  .lg\:gap-8 {
    gap: 2rem;
  }

  .lg\:gap-16 {
    gap: 4rem;
  }

  .lg\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .lg\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .lg\:border-0 {
    border-width: 0px;
  }

  .lg\:bg-transparent {
    background-color: transparent;
  }

  .lg\:p-0 {
    padding: 0px;
  }

  .lg\:p-10 {
    padding: 2.5rem;
  }

  .lg\:px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .lg\:py-2\.5 {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }

  .lg\:py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .lg\:py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .lg\:py-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .lg\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .lg\:py-24 {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  .lg\:pt-28 {
    padding-top: 7rem;
  }

  .lg\:pb-16 {
    padding-bottom: 4rem;
  }

  .lg\:pb-24 {
    padding-bottom: 6rem;
  }

  .lg\:text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .lg\:text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .lg\:text-purple-700 {
    --tw-text-opacity: 1;
    color: rgb(108 43 217 / var(--tw-text-opacity));
  }

  .lg\:hover\:bg-transparent:hover {
    background-color: transparent;
  }

  .lg\:hover\:text-purple-700:hover {
    --tw-text-opacity: 1;
    color: rgb(108 43 217 / var(--tw-text-opacity));
  }

  .dark .lg\:dark\:hover\:bg-transparent:hover {
    background-color: transparent;
  }

  .dark .lg\:dark\:hover\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
}

@media (min-width: 1280px) {
  .xl\:gap-0 {
    gap: 0px;
  }

  .xl\:gap-16 {
    gap: 4rem;
  }

  .xl\:gap-24 {
    gap: 6rem;
  }

  .xl\:gap-10 {
    gap: 2.5rem;
  }

  .xl\:p-8 {
    padding: 2rem;
  }

  .xl\:text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }
}

</style>


  </head>
  <body>
    <header class="fixed w-full">
      <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div
          class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto"
        >
          <a href="/" class="flex items-center">
            <!-- <img src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" /> -->
            <span
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
              >PB Binawa</span
            >
          </a>
          <div class="flex items-center lg:order-2">

            @if (Route::has('login'))
        
                @auth
                <a
                href="/dashboard"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                >Dashboard</a
              >
                @else
                <a
                href="/login"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                >Login</a
              >
                 
                @endauth
        
        @endif

           

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul
              class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
            >
              <li>
                <a
                  href="#home"
                  class="lg:hover:text-purple-700 block py-2 pl-3 pr-4 text-white  rounded lg:bg-transparent text-gray-700 lg:p-0 dark:text-white"
                  aria-current="page"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#whyus"
                  class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" 
                  >Why us</a
                >
              </li>
              <li>
                <a
                  href="#penawaran"
                  class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" 
                  >Penawaran</a
                >
              </li>
              <li>
                <a
                  href="#footer"
                  class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" 
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>




    <!-- Start block -->


    <section
      class="bg-[url('/background.jpg')] bg-no-repeat bg-fixed bg-cover bg-top"
    id="home">
      <div
        class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white"
          >
            Jadilah juara <br />bersama <br />
            PB BINAWA
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            Mari bergabung bersama PB. BINAWA dan asah skill bulutangkis kamu
            hingga menjadi seorang juara.
          </p>
          <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="/register"
              class="bg-purple-700 inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center rounded-lg sm:w-auto text-white"
            >
              DAFTAR SEKARANG !
            </a>
          </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/badminton.png" alt="hero image" />
        </div>
      </div>
    </section>
    <!-- End block -->

    <!-- Start block -->
    <section class="bg-white dark:bg-gray-800 py-8" id="whyus">
      <div
        class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:py-10 lg:px-6"
      >
        <!-- Row -->
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16"  >
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2
              class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              Latihan badminton di Binawa
            </h2>
            <p class="mb-8 font-light lg:text-xl">
              Rasakan manfaat dan keseruan berlatih badminton di PB. BINAWA,
              Jangan salah pilih tempat latihan agar skillmu bisa bertumbuh
              maksimal.
            </p>
            <!-- List -->
            <ul role="list" class="space-y-5 my-7">
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                  >Dilatih oleh bekas ATLET</span
                >
              </li>
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                  >Jadwal latihan rutin dan terstruktur</span
                >
              </li>
              <li class="flex space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                  >Tempat latihan strategis dan bersih</span
                >
              </li>
            </ul>
            <p class="mb-8 font-light lg:text-xl">
              Segera daftar dan maximalkan potensimu dengan berlatih di PB.
              BINAWA
            </p>
          </div>
          <img
            class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="/lapangan.jpg"
            alt="dashboard feature image"
          />
        </div>
        <!-- Row -->
      </div>
    </section>
    <!-- End block -->
    <!-- Start block -->
   
    <!-- Start block -->
    <section class="bg-gray-200 dark:bg-gray-800">
      <div
        class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6"
      >
        <figure class="max-w-screen-md mx-auto">
          <svg
            class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p
              class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white"
            >
              "If we DARE TO WIN, we should also DARE TO LOSE."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <!-- <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> -->
            <div
              class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"
            >
              <div class="pr-3 font-medium text-gray-900 dark:text-white">
                LEE CHONG WEI
              </div>
              <div
                class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400"
              >
                ALL ENGLAND BADMINTON CHAMPIONSHIP
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    <!-- End block -->
    <!-- Start block -->
    <section class="bg-white dark:bg-gray-900" id="penawaran">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Dapatkan harga promo
          </h2>
          <p
            class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"
          >
            Daftarkan diri anda sekarang dan dapatkan penawaran spesial dari
            kami.
          </p>
        </div>
        <div
          class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"
        >
          <!-- Pricing Card -->
          @foreach($harga as $items)
            
          
          <div
            class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
          >
            <h3 class="mb-4 text-2xl font-semibold">{{$items->judul}}</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              {{$items->desc}}
            </p>
            <div class="flex items-baseline justify-center my-8">
              <span class="mr-2 text-5xl font-extrabold">Rp {{$items->harga}}K</span>
            </div>
            <!-- List -->

            <a
              href="/register"
              class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
              >Daftar sekarang!</a
            >
          </div>
          @endforeach
        </div>
      </div>
    </section>
    <!-- End block -->
    <!-- Start block -->

    <!-- End block -->
    <!-- Start block -->
    <section class="bg-gray-200 dark:bg-gray-800">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div class="max-w-screen-sm mx-auto text-center">
          <h2
            class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white"
          >
            Daftarkan dirimu segera
          </h2>
          <p
            class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg"
          >
            Segera daftar selama promo masih tersedia !
          </p>
          <a
            href="/register"
            class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
            >Daftar sekarang!</a
          >
        </div>
      </div>
    </section>
    <!-- End block -->
    <footer class="bg-white dark:bg-gray-800" id="footer">
      <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Order shuttlecock
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">Hp: 012345678903</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Kantor
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">Jln. Maccini no.102</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Waktu Latihan
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">Senin - Rabu - Jumat</a>
                <br />
                <a href="#" class="hover:underline">15:00 - 17:00</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Kontak
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">Hp: 0895338540487</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Lokasi latihan
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">Jl. Pelita VI no.5</a>
              </li>
            </ul>
          </div>
        </div>
        <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        />
        <div class="text-center">
          <a
            href="#"
            class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              src="/logo.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Landwind Logo"
            />
            BINAWA
          </a>
          <span
            class="block text-sm text-center text-gray-500 dark:text-gray-400"
            >© 2023 Binawa™. All Rights Reserved.
          </span>
          <ul class="flex justify-center mt-5 space-x-5">
            <li>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
    <script>
   
    </script>
  </body>
</html>
