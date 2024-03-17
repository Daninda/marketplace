import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.button`
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  border-radius: ${theme.borderRadius.normal};
  background-color: ${theme.color.tertiary};
  color: ${theme.color.light};
  font-size: ${theme.fontSize.normal};
  width: 100%;
  transition: opacity 0.1s ease;

  &:hover {
    opacity: 0.8;
  }
`;
