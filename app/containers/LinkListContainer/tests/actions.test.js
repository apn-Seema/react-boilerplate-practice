import expect from 'expect';
import {
	requestLinksSucceeded,
	requestLinksFailed
} from '../actions';
import {
	REQUEST_LINKS_SUCCEEDED,
	REQUEST_LINKS_FAILED
} from '../constants';

describe('LinkListContainer actions', () => {
	describe('Request Links Action', () => {
		it('has a type of REQUEST_LINKS_SUCCEEDED', () => {
			const links = {
				id: 1,
				url: 'foo'
			};
			const expected = {
				type: REQUEST_LINKS_SUCCEEDED,
				links
			};
			expect(requestLinksSucceeded(links)).toEqual(expected);
		});

		it('has a type of REQUEST_LINKS_FAILED', () => {
			const message = 'foo';
			const expected = {
				type: REQUEST_LINKS_FAILED,
				message
			};
			expect(requestLinksFailed(message)).toEqual(expected);
		});
	});
});
