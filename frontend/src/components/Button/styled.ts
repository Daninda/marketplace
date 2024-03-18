import styled from 'styled-components';
import { theme } from '../../styles';
import { ButtonProps } from './Button';

type StyleProps = Omit<ButtonProps, 'onClick' | 'children'>;

export const Wrapper = styled.button<StyleProps>`
  padding: 1rem 2rem;
  border: none;
  cursor: ${({ $disabled }) => (!$disabled ? 'pointer' : 'not-allowed')};
  width: ${({ $block }) => (!$block ? 'fit-content' : '100%')};

  border: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return '2px solid transparent';
      case 'secondary':
        return `2px solid ${theme.color.tertiary}`;
    }
  }};

  border-radius: ${theme.borderRadius.normal};
  background-color: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return theme.color.tertiary;
      case 'secondary':
        return theme.color.secondary;
    }
  }};
  color: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return theme.color.light;
      case 'secondary':
        return theme.color.primary;
    }
  }};
  font-size: ${theme.fontSize.normal};
  transition: opacity 0.1s ease;

  opacity: ${({ $disabled }) => ($disabled ? 0.8 : 1)};

  &:hover {
    opacity: 0.8;
  }
`;
