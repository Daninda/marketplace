import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.button`
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  border-radius: ${theme.borderRadius.normal};
  background-color: ${theme.color.text};
  color: ${theme.color.background};
  font-size: ${theme.fontSize.normal};
  width: 100%;
`;
