/*
 *
 * MenuProvider
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectMenuProvider from './selectors';
import { toggleMenu } from './actions';

export class MenuProvider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.props.onToggleMenu} />
      </div>
    );
  }
}

MenuProvider.propTypes = {
  onToggleMenu: React.PropTypes.func,
};

const mapStateToProps = selectMenuProvider();

function mapDispatchToProps(dispatch) {
  return {
    onToggleMenu: (evt) => {
      console.log(evt.target.checked);
      dispatch(toggleMenu(evt.target.checked))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuProvider);
