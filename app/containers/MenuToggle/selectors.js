import { createSelector } from 'reselect';

/**
 * Direct selector to the menuToggle state domain
 */
const selectMenuToggleDomain = () => (state) => state.get('menuToggle');

/**
 * Other specific selectors
 */
const selectMenuClass = () => createSelector(
  selectMenuToggleDomain(),
  (menuToggleState) => menuToggleState.get('classMenu')
);

/**
 * Default selector used by MenuToggle
 */

const selectMenuToggle = () => createSelector(
  selectMenuToggleDomain(),
  (menuToggleState) => menuToggleState.get('isActiveMenu')
);

export default selectMenuToggleDomain;
export {
  selectMenuToggle,
  selectMenuClass,
};
