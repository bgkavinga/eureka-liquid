import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

import 'slick-carousel';

import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';
import {cookiesEnabled} from '@shopify/theme-cart';

import $ from 'jquery';
import 'what-input';

window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

// Common a11y fixes
focusHash();
bindInPageLinks();

// Apply a specific class to the html element for browser support of cookies.
if (cookiesEnabled()) {
  document.documentElement.className = document.documentElement.className.replace(
    'supports-no-cookies',
    'supports-cookies',
  );
}
