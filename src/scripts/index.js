import 'normalize.css';
import '../styles/utilities.css';
import '../styles/icons.css';
import '../styles/index.scss';

import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCIconButtonToggle } from '@material/icon-button';

const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));

const ripplesSelector = '.mdc-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(ripplesSelector), el => {
  const ripple = new MDCRipple(el);
  ripple.unbounded = true;
  return ripple;
});

[].map.call(document.querySelectorAll('.mdc-icon-button'), el => {
  return new MDCIconButtonToggle(el);
});
