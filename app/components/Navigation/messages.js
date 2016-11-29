/*
 * Navigation Messages
 *
 * This contains all the text for the Navigation component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
	header: {
		id: 'app.components.Navigation.header',
		defaultMessage: `We have {topicsCount} {topicsCount, plural,
			one {topic}
			other {topics}} in the nav component`
	},
});
