import Button from '../Button/Button';
import Price from '../Price';
import { Description, Details, Image, ImageWrapper, PriceWrapper, Title, Wrapper } from './styled';

type ProductCardProps = {
  id: number;
  slug?: string;
  imgSrc: string;
  priceRegular: number;
  priceDiscounted?: number;
  title: string;
  description: string;
};

export default function ProductCard(props: ProductCardProps) {
  const { imgSrc, priceRegular, priceDiscounted, title, description } = props;
  return (
    <Wrapper>
      <Details>
        <ImageWrapper>
          <Image src={imgSrc} />
        </ImageWrapper>
        <PriceWrapper>
          <Price priceRegular={priceRegular} priceDiscounted={priceDiscounted} />
        </PriceWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Details>
      <Button>В корзину</Button>
    </Wrapper>
  );
}
