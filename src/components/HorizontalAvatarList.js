import React, { Fragment } from 'react';
import PropTypes from 'utils/propTypes';

import { UncontrolledTooltip } from 'reactstrap';

import Avatar from 'components/Avatar';

const HorizontalAvatarList = ({ tag: Tag, avatars, ...restProps }) => {
  return (
    <Tag className="d-flex align-items-center">
      {avatars &&
        avatars.map(({ avatar, name }, index) => (
          <Fragment>
            <Avatar
              id={`HorizontalAvatarList-avatar-${index}`}
              key={index}
              src={avatar}
              style={{
                zIndex: index,
                border: '2px solid #fff',
                marginLeft: -15,
              }}
            />

            <UncontrolledTooltip
              delay={{ show: 0, hide: 0 }}
              target={`HorizontalAvatarList-avatar-${index}`}>
              {name}
            </UncontrolledTooltip>
          </Fragment>
        ))}
    </Tag>
  );
};

HorizontalAvatarList.propTypes = {
  tag: PropTypes.node,
  avatars: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string,
    })
  ).isRequired,
};

HorizontalAvatarList.defaultProps = {
  tag: 'div',
  avatars: [],
};

export default HorizontalAvatarList;
