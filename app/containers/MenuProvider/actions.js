/*
 *
 * MenuProvider actions
 *
 */

import {
  TOGGLE_MENU,
} from './constants';

export function toggleMenu(menu) {
  console.log(menu);
  return {
    type: TOGGLE_MENU,
    menu: menu,
  };
}
