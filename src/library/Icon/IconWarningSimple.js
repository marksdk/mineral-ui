/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconWarningSimple(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M13.414 2.718l7.868 7.868c.78.78.78 2.047 0 2.828l-7.868 7.868c-.78.78-2.047.78-2.828 0l-7.868-7.868a2.001 2.001 0 0 1 0-2.828l7.868-7.868c.78-.78 2.047-.78 2.828 0z" />
      </g>
    </Icon>
  );
}

IconWarningSimple.displayName = 'IconWarningSimple';
IconWarningSimple.category = 'alert';
