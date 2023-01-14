import React, { useState } from 'react';
import styled from 'styled-components';
import { i18n } from '../../lib/lang';
import searchIcon from '../../assets/icon/search.svg';

export const Elem: React.FC<{
  title?: string;
  error?: boolean;
  errorMessage?: string;
  onChange?: Function;
  onBlur?: Function;
  value?: any;
  name?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  placeholder?: any;
  className?: string;
  type?:
    | 'number'
    | 'time'
    | 'text'
    | 'date'
    | 'email'
    | 'password'
    | 'search'
    | 'tel'
    | 'url'
    | 'week'
    | 'month'
    | 'datetime-local';
}> = ({
  error,
  onChange,
  onBlur,
  value,
  name,
  disabled,
  placeholder,
  className,
  type = 'search',
}) => {
  const handleChange = (e: any) => {
    if (!e.target) e.target = {};

    e.target.name = name;
    e.target.value = e.target.value;

    if (onChange) {
      onChange(e);
    }
  };

  const handleBlur = (e: any) => {
    if (!e.target) e.target = {};

    e.target.name = name;
    e.target.value = e.target.value;

    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <Content>
      <Input
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error}
        type={type}
        value={value}
        placeholder={placeholder && i18n.t(placeholder)}
        className={className}
      />

      <IconContainer>
        <Icon src={searchIcon} />
      </IconContainer>
    </Content>
  );
};

const Input = styled.input<{
  error?: boolean;
  onIonChange?: Function;
  type?: string;
}>`
  height: 37px;
  padding: 10px 15px 9px;
  padding-right: 48px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.52px;
  text-align: start;
  background: #837f7f;
  border-radius: 10px;
  width: 100%;
  border: none;
  outline: none;
  box-sizing: border-box;

  &:hover {
    border-color: #17323a;
  }

  &:focus-within {
    box-shadow: #17323a;
    background: #17323a;
  }
  ::placeholder {
    color: #ffffff;
  }
`;
const Content = styled.div`
  position: relative;
  max-width: 602px;
  width: 100%;
`;
const Icon = styled.img``;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: max-content;
  height: 37px;
  padding: 0 12px;
  cursor: pointer;
`;
