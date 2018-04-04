import React from 'react';

import { Badge } from 'reactstrap';

const positionMap = {
  'top-right': {
    top: -5,
    right: -5,
  },
  'top-left': {
    top: -5,
    left: -5,
  },
  'bottom-left': {
    bottom: -5,
    left: -5,
  },
  'bottom-right': {
    bottom: -5,
    right: -5,
  },
};

const withBadge = ({
  position = 'bottom-right',
  ...restBadgeProps
}) => WrappedComponent => ({ tag: Tag = 'div', ...restProps }) => {
  return (
    <Tag className="position-relative">
      <WrappedComponent {...restProps} />
      <Badge
        className="position-absolute"
        style={{
          ...positionMap[position],
          width: 10,
          height: 10,
          borderRadius: '50%',
        }}
        {...restBadgeProps}
      />
    </Tag>
  );
};

export default withBadge;
