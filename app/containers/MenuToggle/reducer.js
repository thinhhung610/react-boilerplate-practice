/*
 *
 * MenuToggle reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_MENU,
  LOAD_CLASS_MENU,
} from './constants';

const initialState = fromJS({
  isActiveMenu: false,
  classMenu: 'hambuger'
});

function menuToggleReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return state
        .set('isActiveMenu', !state.get('isActiveMenu'));
    case LOAD_CLASS_MENU:
      return state
        .set('classMenu', state.get('isActiveMenu') ? 'hambuger active' : 'hambuger');
    default:
      return state;
  }
}

export default menuToggleReducer;
