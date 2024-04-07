import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.header`
  padding: 0 2rem;
  display: flex;
  column-gap: 2rem;
  align-items: center;
  transition: margin 0.2s ease-out;
  color: ${theme.color.primary};
  background-color: ${theme.color.light};
  box-shadow: ${theme.shadow.primary};
  height: 6rem;
  z-index: 2;
`;

export const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  opacity: 1;
  transition: 100ms opacity;
  color: ${theme.color.primary};

  &:hover {
    opacity: ${theme.transitionValue.opacity};
  }
`;

export const Logo = styled.img`
  height: 100%;
  width: 25rem;
  object-fit: contain;
`;

export const Menu = styled.div``;
