/*
 *
 * MenuToggle actions
 *
 */

import {
  TOGGLE_MENU,
  LOAD_CLASS_MENU,
} from './constants';

export function toggleMenu() {
  return {
    type: TOGGLE_MENU,
  };
}

export function loadClassMenu() {
  return {
    type: LOAD_CLASS_MENU,
  };
}
