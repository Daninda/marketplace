import styled from 'styled-components';
import { theme } from '../../styles';
import { IButtonProps } from './Button';

type StyleProps = Omit<IButtonProps, 'onClick' | 'children'>;

export const Wrapper = styled.button<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  padding: ${({ $variant }) => {
    switch ($variant) {
      case 'tertiary':
        return '1rem 1rem';
      case 'primary':
      case 'secondary':
        return '1rem 2rem';
    }
  }};
  cursor: ${({ $disabled }) => (!$disabled ? 'pointer' : 'not-allowed')};
  width: ${({ $block }) => (!$block ? 'fit-content' : '100%')};

  border: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
      case 'tertiary':
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
      case 'tertiary':
        return 'transparent';
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
