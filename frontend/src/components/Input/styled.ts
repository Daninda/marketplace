import styled from 'styled-components';
import { theme } from 'styles';

export const Wrapper = styled.label`
  display: flex;
  column-gap: 1rem;
  padding: 1rem 2rem;
  align-items: center;
  border-radius: ${theme.borderRadius.normal};
  width: 100%;
  border: 2px solid ${theme.color.tertiary};
`;

export const InputWrapper = styled.input`
  border: none;
  outline: none;
  font-size: ${theme.fontSize.normal};
  width: 100%;
  color: ${theme.color.primary};
`;
