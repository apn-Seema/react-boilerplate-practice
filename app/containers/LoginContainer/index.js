/*
 *
 * LoginContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLoginContainer from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Login from '../../components/Login';

export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
	render() {
		return (
			<div>
				<FormattedMessage {...messages.header} />
				<Login {...this.props} />
			</div>
		);
	}
}

const mapStateToProps = selectLoginContainer();

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
