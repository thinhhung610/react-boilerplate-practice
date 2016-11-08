/*
 *
 * AboutPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styles from './styles.css';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import H1 from 'components/H1';

export class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  openHomePage = () => {
    this.props.dispatch(push('/'));
  };

  render() {
    return (
      <div className={styles.aboutPage}>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <div>
          <FormattedMessage {...messages.body} />
        </div>
        <Button handleRoute={this.openHomePage}>
          <FormattedMessage {...messages.homeButton} />
        </Button>
      </div>
    );
  }
}

AboutPage.propTypes = {
  dispatch: React.PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AboutPage);
