import styled from 'styled-components';
import { theme } from '../../styles';

export const Title = styled.h2`
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.bold};
  padding: 1.5rem 0;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr 1fr;

  @media ${theme.media.medium} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${theme.media.large} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media ${theme.media.extraLarge} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
