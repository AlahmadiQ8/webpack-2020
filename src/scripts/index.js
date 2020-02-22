import 'normalize.css';
import '../styles/icons.css';
import '../styles/index.scss';

import {MDCRipple} from '@material/ripple';

console.log('webpack starterkit');
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
