import { Button, ButtonProps } from 'antd';
import styled, { css } from 'styled-components';
import chroma from 'chroma-js';

interface CustomButtonProps extends ButtonProps {
  color?: string;
}

const StyledButton = styled(Button)<CustomButtonProps>`
  ${({ color }) => {
    if (color) {
      const baseColor = color || '#1890ff';
      const colors = chroma
        .scale([chroma(baseColor).brighten(2), baseColor])
        .colors(3);

      return css`
        background-color: ${colors[1]};
        color: ${colors[0]} !important;

        &:hover {
          background-color: ${colors[0]};
          color: ${baseColor} !important;
          border-color: ${baseColor} !important;
        }

        &:active,
        &:focus {
          background-color: ${colors[1]};
        }
      `;
    }
  }}
`;

// color &&
// css`
//   background-color: ${color};
//   border-color: ${color};
//   color: #fff;
// `}

export { StyledButton };
