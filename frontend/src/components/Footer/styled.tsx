import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.footer`
  padding: 1.5rem 2rem;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  transition: margin 0.2s ease-out;
  background-color: ${theme.color.light};
  box-shadow: ${theme.shadow.primary};
  height: 6rem;
  z-index: 2;
`;
