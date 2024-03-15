import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.footer`
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  transition: margin 0.2s ease-out;
  color: ${theme.color.text};
  background-color: ${theme.color.surface};
  height: 6rem;
  z-index: 2;
`;
