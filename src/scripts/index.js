import 'normalize.css';
import '../styles/utilities.css';
import '../styles/icons.css';
import '../styles/index.scss';

import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCIconButtonToggle } from '@material/icon-button';
import {MDCTextField} from '@material/textfield';
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';
import {MDCDialog} from '@material/dialog';

const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));

const ripplesSelector = '.mdc-button, .mdc-card__primary-action';
[].map.call(document.querySelectorAll(ripplesSelector), el => {
  const ripple = new MDCRipple(el);
  ripple.unbounded = true;
  return ripple;
});

[].map.call(document.querySelectorAll('.mdc-icon-button'), el => {
  return new MDCIconButtonToggle(el);
});

[].map.call(document.querySelectorAll('.mdc-text-field'), el => {
  const field = new MDCTextField(el);
});


const dialogElement = document.querySelector('.mdc-dialog');
const dialog = new MDCDialog(dialogElement);
const dialogInput = dialogElement.querySelector('input');
dialogInput.value = window.location.href;
const copyToClipboard = document.getElementById("CopyPermalink");
copyToClipboard.addEventListener('click', () => {
  dialog.open();
  dialogInput.select();
});
const copyToClipboardTextField = new MDCTextField(document.querySelector('.mdc-dialog .mdc-text-field'));
dialog.listen('MDCDialog:opened', () => {
  copyToClipboardTextField.layout();
});
dialog.listen('MDCDialog:closing', e => {
  if (e.detail.action == "copyToClipboard") {
    document.execCommand('copy');
  }
});
// [].map.call(document.querySelectorAll('.mdc-text-field-helper-text'), el => {
//   const field =new MDCTextFieldHelperText(el);
// });
