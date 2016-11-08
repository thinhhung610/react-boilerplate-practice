import expect from 'expect';
import menuToggleReducer from '../reducer';
import { fromJS } from 'immutable';

describe('menuToggleReducer', () => {
  it('returns the initial state', () => {
    expect(menuToggleReducer(undefined, {})).toEqual(fromJS({}));
  });
});
