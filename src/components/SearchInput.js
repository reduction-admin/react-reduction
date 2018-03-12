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
        placeholder="Search..."
      />
    </Form>
  );
};

export default SearchInput;
