import React from 'react';
import PropTypes from 'utils/propTypes';

import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

import Todos, { propTypes as TodosPropTypes } from 'components/Todos';

const TodosCard = ({ image, title, subtitle, todos, ...restProps }) => {
  return (
    <Card {...restProps}>
      <div className="position-relative">
        <CardImg src={image} />
        <CardImgOverlay className="bg-dark" style={{ opacity: 0.2 }}>
          <CardTitle className="text-white">{title}</CardTitle>
          <CardText className="text-white">{subtitle}</CardText>
        </CardImgOverlay>
      </div>
      <Todos todos={todos} />
    </Card>
  );
};

TodosCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  todos: TodosPropTypes.todos,
};

TodosCard.defaultProps = {
  image: '/img/bg/background_1920-2.jpg',
  title: 'Tasks',
  subtitle: 'Due soon...',
};

export default TodosCard;
