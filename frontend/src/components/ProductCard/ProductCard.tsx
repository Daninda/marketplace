import Button from '../Button/Button';
import LikeButton from '../LikeButton';
import Price from '../Price';
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

type ProductCardProps = {
  id: number;
  slug?: string;
  imgSrc: string;
  priceRegular: number;
  priceDiscounted?: number;
  title: string;
  description: string;
  seller: string;
};

export default function ProductCard(props: ProductCardProps) {
  const { id, slug, imgSrc, priceRegular, priceDiscounted, title, description, seller } = props;
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
}
