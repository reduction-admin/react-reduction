import React from 'react';
import PropTypes from 'utils/propTypes';

import classNames from 'classnames';

const tagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  'display-1': 'h1',
  'display-2': 'h1',
  'display-3': 'h1',
  'display-4': 'h1',
  p: 'p',
  lead: 'p',
  blockquote: 'blockquote',
};

const types = Object.values(tagMap);

const Typography = ({ tag: Tag, className, type, ...restProps }) => {
  const classes = classNames({ [type]: !!type }, className);
  let TypoComp;

  if (Tag) {
    TypoComp = Tag;
  } else if (!Tag && tagMap[type]) {
    TypoComp = tagMap[type];
  } else {
    TypoComp = 'p';
  }

  return <TypoComp {...restProps} className={classes} />;
};

Typography.propTypes = {
  tag: PropTypes.component,
  className: PropTypes.string,
  type: PropTypes.oneOf(types),
};

Typography.defaultProps = {
  type: 'p',
};

export default Typography;
