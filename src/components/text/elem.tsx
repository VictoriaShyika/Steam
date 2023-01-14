import React, { ReactNode } from 'react';
import { i18n } from '../../lib/lang';
import styled, { css } from 'styled-components';
import {
  SIZE_FONT_DATA,
  SIZE_FONT_ENUM,
  SIZE_FONT_TYPE,
} from '../../theme/size';
import { COLOR_DATA, COLOR_ENUM, COLOR_TYPE } from '../../theme/color';

export const Elem: React.FC<{
  tid?: string;
  tvalue?: object;
  color?: COLOR_TYPE;
  type?: any;
  size?: SIZE_FONT_TYPE;
  children?: ReactNode;
  className?: string;
}> = ({
  children,
  tid,
  tvalue,
  color,
  size,
  type,

  className,
}) => {
  return (
    <Text color={color} size={size} type={type} className={className}>
      {tid ? i18n.t(tid) : children}
    </Text>
  );
};

const Text = styled.span<{
  size?: SIZE_FONT_TYPE;
  color?: COLOR_TYPE;
  type?: any;
}>`
  font-family: 'Manrope', sans-serif !important;
  display: block;
  ${({
    size = SIZE_FONT_ENUM.DEFAULT,
    color = COLOR_ENUM.DEFAULT,
    // type = SIZE_FONT_WEIGHT_ENUM.REGULAR,
  }) => css`
    color: ${COLOR_DATA[color]};
    font-size: ${SIZE_FONT_DATA[size]}px;
    overflow-wrap: break-word;
  `};
`;
