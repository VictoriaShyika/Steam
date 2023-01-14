import React, { useState } from 'react';
import styled from 'styled-components';
import orderIcon from '../../assets/icon/order.svg';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import { TextElem } from '../text';

export const Elem: React.FC<{ setOrder: any }> = ({ setOrder }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleSelect = (value: string) => {
    setOrder(value);
    setOpen(false);
  };

  return (
    <Content>
      <Icon src={orderIcon} onClick={handleClick} />
      {open && (
        <Menu>
          <OptionContainer onClick={() => handleSelect('LtB')}>
            <TextElem tid="HEADER.ORDER.OPTIONS.LOWER" />
          </OptionContainer>
          <OptionContainer onClick={() => handleSelect('BtL')}>
            <TextElem tid="HEADER.ORDER.OPTIONS.BIGGER" />
          </OptionContainer>
        </Menu>
      )}
    </Content>
  );
};

const Content = styled.div`
  position: relative;
`;
const Icon = styled.img`
  background: #837f7f;
  border-radius: 10px;
  padding: 1.5px 2px;
  cursor: pointer;
`;
const Menu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 144px;
  padding: 8px 16px;
  gap: 4px;
  background-color: #837f7f;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
`;
const OptionContainer = styled.div`
  cursor: pointer;
  color: #ffffff;
`;
