import React from 'react';
import PropTypes from 'utils/propTypes';

import {
  ListGroup,
  ListGroupItem,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

export const propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.ID,
      title: PropTypes.string,
      done: PropTypes.bool,
    })
  ),
};

const Todos = ({ todos, ...restProps }) => {
  return (
    <ListGroup flush {...restProps}>
      {todos.map(({ id, title, done } = {}) => (
        <ListGroupItem key={id} className="border-0">
          <FormGroup check>
            <Label check>
              <Input type="checkbox" checked={done} readOnly />
              {done ? <strike>{title}</strike> : <span>{title}</span>}
            </Label>
          </FormGroup>
        </ListGroupItem>
      ))}
      <Button block>Add</Button>
    </ListGroup>
  );
};

Todos.propTypes = propTypes;

Todos.defaultProps = {
  todos: [],
};

export default Todos;
