import expect from 'expect';
import menuProviderReducer from '../reducer';
import { fromJS } from 'immutable';

describe('menuProviderReducer', () => {
  it('returns the initial state', () => {
    expect(menuProviderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
