import React from 'react';
import styled from 'styled-components';
import { SelectElem } from '../../components/select';
import { TextElem } from '../../components/text';
import { SELECT_TYPE_OPTIONS } from './constant';

export const Component: React.FC<{ onChange: Function }> = ({ onChange }) => {
  return (
    <SelectElem
      onChange={onChange}
      options={SELECT_TYPE_OPTIONS}
      defaultValue={SELECT_TYPE_OPTIONS[0]}
      getOptionLabel={(e: any) => (
        <OptionContainer>
          <TextElem tid={e.label} />
          <Icon src={e.icon} />
        </OptionContainer>
      )}
    />
  );
};
const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Icon = styled.img``;
