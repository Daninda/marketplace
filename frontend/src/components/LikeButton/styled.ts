import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.button`
  position: absolute;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem;
  width: fit-content;
  color: ${theme.color.danger};
  transition: opacity 0.1s ease, transform 0.05s ease;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    transform: scale(1.1);
  }
`;
