import React from 'react';

import classNames from 'classnames';

import { Badge } from 'reactstrap';

const positionMap = {
  'top-right': {
    top: -3,
    right: -3,
  },
  'top-left': {
    top: -3,
    left: -3,
  },
  'bottom-left': {
    bottom: -3,
    left: -3,
  },
  'bottom-right': {
    bottom: -3,
    right: -3,
  },
};

const sizeMap = {
  xs: {
    width: 10,
    height: 10,
  },
  sm: {
    width: 15,
    height: 15,
  },
  md: {
    width: 20,
    height: 20,
  },
  lg: {
    width: 25,
    height: 25,
  },
  xl: {
    width: 30,
    height: 30,
  },
};

const withBadge = ({
  position = 'bottom-right',
  size = 'sm',
  style = {},
  className,
  ...restBadgeProps
} = {}) => WrappedComponent => ({ tag: Tag = 'div', ...restProps }) => {
  return (
    <Tag className="d-inline-block position-relative">
      <WrappedComponent {...restProps} />
      <Badge
        className={classNames('position-absolute', className)}
        style={{
          ...positionMap[position],
          ...sizeMap[size],
          borderRadius: '50%',
          border: '2px solid #fff',
          ...style,
        }}
        {...restBadgeProps}
      />
    </Tag>
  );
};

export default withBadge;
