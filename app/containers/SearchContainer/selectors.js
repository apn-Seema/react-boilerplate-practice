import { createSelector } from 'reselect';

/**
 * Direct selector to the searchContainer state domain
 */
const selectSearchContainerDomain = () => (state) => state.get('searchContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SearchContainer
 */

const selectSearchContainer = () => createSelector(
  selectSearchContainerDomain(),
  (substate) => substate.toJS()
);

export default selectSearchContainer;
export {
  selectSearchContainerDomain,
};
