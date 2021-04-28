@use "@material/icon-button";
@use "@material/top-app-bar/mdc-top-app-bar";

@include icon-button.core-styles;

import {MDCTopAppBar} from '@material/top-app-bar';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
