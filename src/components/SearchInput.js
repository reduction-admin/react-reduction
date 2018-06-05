import React from 'react';

import { Form, Input } from 'reactstrap';
import { MdSearch } from 'react-icons/lib/md';

const SearchInput = () => {
  return (
    <Form inline className="cr-search-form" onSubmit={e => e.preventDefault()}>
      <MdSearch
        size="20"
        className="cr-search-form__icon-search text-secondary"
      />
      <Input
        type="search"
        className="cr-search-form__input"
        placeholder="Search For Event, Artist, Team or Venue..."
        style={{width:'600px'}}
      />
    </Form>
  );
};

export default SearchInput;
