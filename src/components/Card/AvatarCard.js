import classNames from 'classnames';
import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import PropTypes from 'utils/propTypes';
import Avatar from '../Avatar';

const AvatarCard = ({
  avatar,
  avatarSize,
  title,
  subtitle,
  text,
  children,
  className,
  ...restProps
}) => {
  const classes = classNames('bg-gradient-theme-left', className);

  return (
    <Card inverse className={classes} {...restProps}>
      <CardBody className="d-flex justify-content-center align-items-center flex-column">
        <Avatar src={avatar} size={avatarSize} className="mb-3" />
        <CardTitle>{title}</CardTitle>
        {!!subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
        {!!text && (
          <CardText>
            <small>{text}</small>
          </CardText>
        )}
        {children}
      </CardBody>
    </Card>
  );
};

AvatarCard.propTypes = {
  avatar: PropTypes.string,
  avatarSize: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

AvatarCard.defaultProps = {
  avatarSize: 80,
};

export default AvatarCard;
