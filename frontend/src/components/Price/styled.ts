import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 0.25rem 0;
`;

export const PriceDiscounted = styled.p`
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.accent};
`;

export const PriceRegular = styled.p`
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.bold};
`;

export const PriceRegularIfDiscounted = styled.p`
  font-size: ${theme.fontSize.normal};
  text-decoration: line-through;
`;
