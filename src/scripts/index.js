import 'normalize.css';
import '../styles/icons.css';
import '../styles/index.scss';

import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';

const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
