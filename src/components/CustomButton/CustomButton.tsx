import React, { ReactNode } from 'react';
import { StyledButton } from './styles';
import { ButtonProps } from 'antd';

interface ICustomButton extends ButtonProps {
  children: ReactNode | string;
  color?: string;
}

const CustomButton: React.FC<ICustomButton> = (props) => {
  return (
    <>
      <StyledButton color={props.color} {...props}>
        {props.children}
      </StyledButton>
    </>
  );
};

export default CustomButton;
