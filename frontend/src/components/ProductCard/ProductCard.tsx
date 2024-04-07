import Button from '@components/Button/Button';
import LikeButton from '@components/LikeButton';
import Price from '@components/Price';
import { FC } from 'react';
import {
  Description,
  Details,
  Image,
  ImageWrapper,
  PriceWrapper,
  Seller,
  Title,
  Wrapper,
} from './styled';

interface IProductCardProps {
  id: number;
  slug?: string;
  imgSrc: string;
  priceRegular: number;
  priceDiscounted?: number;
  title: string;
  description: string;
  seller: string;
}

const ProductCard: FC<IProductCardProps> = ({
  id,
  slug,
  imgSrc,
  priceRegular,
  priceDiscounted,
  title,
  description,
  seller,
}) => {
  return (
    <Wrapper>
      <LikeButton productId={id} />
      <Details>
        <ImageWrapper to={`/product/${slug || id}`}>
          <Image src={imgSrc} />
        </ImageWrapper>
        <PriceWrapper>
          <Price priceRegular={priceRegular} priceDiscounted={priceDiscounted} />
        </PriceWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Seller>{seller}</Seller>
      </Details>
      <Button>В корзину</Button>
    </Wrapper>
  );
};

export default ProductCard;
