/*
 *
 * MenuProvider reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_MENU,
} from './constants';

const initialState = fromJS({
  menu: false
});

function menuProviderReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return state
        .set('menu', action.menu);
    default:
      return state;
  }
}

export default menuProviderReducer;
