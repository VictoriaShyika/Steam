import React from 'react';
import styled from 'styled-components';
import { COLOR_DATA, COLOR_ENUM } from '../../theme/color';
import { Link } from 'react-router-dom';
import { TextElem } from '../text';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';

export const Elem: React.FC<{}> = ({}) => {
  return (
    <Content>
      <Button to="/">
        <TextElem size="small" tid="HEADER.NAV.SEARCH" />
      </Button>
      <Button to="/like">
        <TextElem size="small" tid="HEADER.NAV.LIKE" />
      </Button>
    </Content>
  );
};

const Content = styled.div`
  padding: 0;
  max-width: 143px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 37px;
  background-color: ${COLOR_DATA[COLOR_ENUM.INPUT]};
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
`;
const Button = styled(Link)`
  text-decoration: none;
  height: 37px;
  box-sizing: border-box;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  padding: 10px 16px;
`;
