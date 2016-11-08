import { createSelector } from 'reselect';

/**
 * Direct selector to the menuProvider state domain
 */
const selectMenuProviderDomain = () => (state) => state.get('menu');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MenuProvider
 */

const selectMenuProvider = () => createSelector(
  selectMenuProviderDomain(),
  (substate) => substate.toJS()
);

export default selectMenuProvider;
export {
  selectMenuProviderDomain,
};
