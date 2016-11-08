/*
 *
 * MenuToggle
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMenuToggle, selectMenuClass } from './selectors';
import { toggleMenu, loadClassMenu } from './actions';

import A from 'components/A';

export class MenuToggle extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <a className={this.props.classMenu} href="#" onClick={this.props.onToggleMenu}>
          <span>Click me!!!</span>
        </a>
      </div>
    );
  }
}

MenuToggle.propTypes = {
  classMenu: React.PropTypes.string,
  onToggleMenu: React.PropTypes.func,
};

//const mapStateToProps = selectMenuToggle();
// const mapStateToProps = createSelector(
//   selectMenuToggle(),
//   (classMenu) => selectMenuClass()
// );

const mapStateToProps = createStructuredSelector({
  isActiveMenu: selectMenuToggle(),
  classMenu: selectMenuClass()
});

function mapDispatchToProps(dispatch) {
  return {
    onToggleMenu: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();

      dispatch(toggleMenu());
      dispatch(loadClassMenu());
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuToggle);
