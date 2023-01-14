import React from 'react';
import Select from 'react-select';
import styled, { css } from 'styled-components';
import { COLOR_DATA, COLOR_ENUM } from '../../theme/color';
import { PROPS_TYPE } from './constant';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
  SIZE_FONT_DATA,
  SIZE_FONT_ENUM,
} from '../../theme/size';
import arrowIcon from '../../assets/icon/arrow.svg';

export const Elem: React.FC<PROPS_TYPE> = ({
  onChange,
  options,
  name,
  defaultValue,
  components,
  className,
  getOptionLabel,
}) => {
  const handlaeChange = (e: any) => {
    onChange(e);
  };
  return (
    <CustomSelect
      arrow={arrowIcon}
      classNamePrefix={'Select'}
      options={options}
      onChange={handlaeChange}
      name={name}
      isSearchable={false}
      menuPlacement="auto"
      defaultValue={defaultValue || 'select'}
      getOptionLabel={getOptionLabel && ((e) => getOptionLabel(e))}
    />
  );
};

const CustomSelect = styled(Select)<{ arrow: string }>`
  & .Select__control {
    border-radius: ${SIZE_BORDER_RADIUS_DATA[
      SIZE_BORDER_RADIUS_ENUM.DEFAULT
    ]}px;
    align-self: center;
    height: 36px;
    padding-left: 18px;
    padding-right: 16px;
    width: 100%;
    min-width: 144px;
    border: none;
    background-color: ${COLOR_DATA[COLOR_ENUM.INPUT]};
    img {
      display: none;
    }
    path {
      display: none;
    }
    .Select__indicator {
      ${({ arrow }) =>
        arrow &&
        css`
          content: url(${arrow});
          fill: #231f20;
        `}
    }
  }

  & .Select__control--is-focused {
    box-shadow: none;
    :focus-within {
      z-index: 99;
    }
    background: ${COLOR_DATA[COLOR_ENUM.INPUT]};
  }

  & .Select__control--menu-is-open {
    box-shadow: none;
    & .Select__indicator.Select__dropdown-indicator {
      transform: rotate(180deg);
    }
  }
  & .Select__value-container {
    padding: 0;
  }

  & .Select__indicator-separator {
    display: none;
  }
  & .Select__indicator.Select__dropdown-indicator {
    padding: 0;
    transition: all 0.3s;
  }
  & .Select__menu {
    background: ${COLOR_DATA[COLOR_ENUM.INPUT]};
    border-radius: ${SIZE_BORDER_RADIUS_DATA[
      SIZE_BORDER_RADIUS_ENUM.DEFAULT
    ]}px;
    z-index: 9;
    box-shadow: none;
    margin-top: 7px;
  }
  & .Select__menu-list {
    padding: 5px 0;
    z-index: 999;
    background: ${COLOR_DATA[COLOR_ENUM.INPUT]};
    border-radius: ${SIZE_BORDER_RADIUS_DATA[
      SIZE_BORDER_RADIUS_ENUM.DEFAULT
    ]}px;
    & :last-child {
      border: none;
    }
  }

  & .Select__option {
    font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.DEFAULT]}px;
    padding: 0 18px 0 16px;
    align-self: center;
  }

  & .Select__option--is-selected {
    background: #514e4e;
  }
  & .Select__option--is-focused {
    background: #635e5e;
  }

  & .css-tr4s17-option:active {
    background-color: #17323a;
  }
`;
