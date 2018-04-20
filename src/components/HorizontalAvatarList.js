import React, { Fragment } from 'react';
import PropTypes from 'utils/propTypes';

import { UncontrolledTooltip } from 'reactstrap';

import Avatar from 'components/Avatar';

const HorizontalAvatarList = ({
  tag: Tag,
  avatars,
  avatarProps,
  reversed,
  ...restProps
}) => {
  let leng = reversed ? avatars.length + 1 : 1;
  const count = reversed ? () => leng-- : () => leng++;

  return (
    <Tag className="d-flex align-items-center" {...restProps}>
      {avatars &&
        avatars.map(({ avatar, name }, i) => {
          const index = count();
          const isFirstItem = i === 0;

          return (
            <Fragment>
              <Avatar
                {...avatarProps}
                id={`HorizontalAvatarList-avatar-${index}`}
                key={index}
                src={avatar}
                style={{
                  zIndex: index,
                  border: '3px solid #fff',
                  marginLeft: !isFirstItem && -20,
                }}
              />

              {!!name && (
                <UncontrolledTooltip
                  delay={{ show: 0, hide: 0 }}
                  target={`HorizontalAvatarList-avatar-${index}`}>
                  {name}
                </UncontrolledTooltip>
              )}
            </Fragment>
          );
        })}
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
  avatarProps: PropTypes.object,
  reversed: PropTypes.bool,
};

HorizontalAvatarList.defaultProps = {
  tag: 'div',
  avatars: [],
  avatarProps: {},
  reversed: false,
};

export default HorizontalAvatarList;
