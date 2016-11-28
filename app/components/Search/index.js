/**
*
* Search
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


function Search() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default Search;
