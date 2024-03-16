import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 1;
  padding: 0.5rem;
  background-color: ${theme.color.surface};
  border-radius: ${theme.borderRadius.normal};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const PriceWrapper = styled.div`
  margin-top: 1.5rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`;

export const Title = styled.h3`
  font-size: ${theme.fontSize.normal};
  margin: 1rem 0;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  object-fit: cover;
`;

export const Description = styled.p`
  font-size: ${theme.fontSize.normal};
  font-weight: ${theme.fontWeight.light};
  margin-bottom: 1.5rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  object-fit: cover;
`;
