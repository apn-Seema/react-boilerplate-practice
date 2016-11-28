import expect from 'expect';
import searchContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('searchContainerReducer', () => {
  it('returns the initial state', () => {
    expect(searchContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
