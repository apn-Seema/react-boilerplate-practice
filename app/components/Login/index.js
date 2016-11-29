/**
*
* Login
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import validator from 'email-validator';
import classNames from 'classnames';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
	state = {};

	login = () => {
		const email = this.emailField.value;
		if (!validator.validate(email)) {
			this.setState({
				errorText: `${email} is not a valid email`
			});
			return;
		}

		this.setState({
			errorText: null
		});
	}

	render() {
		const fieldError = this.state.errorText ? (
			<div className={styles.errorMessage}>
				{this.state.errorText}
			</div>
		) : null;

		return (
			<div className={styles.login}>
				<div className={styles.heading}>
					<FormattedMessage {...messages.header} />
				</div>
				<input className={classNames(styles.input, { [styles.inputError]: this.state.errorText })} placeholder="Your email" ref={(f) => { this.emailField = f; }} type="text" />
				{fieldError}
				<div className={styles.actionContainer}>
					<div className={styles.button}>
						cancel
					</div>
					<div className={styles.button} onClick={this.login}>
						login
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
