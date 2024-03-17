import { useState } from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi2';
import { Wrapper } from './styled';

type LikeButtonProps = {
  productId: number;
};

export default function LikeButton(props: LikeButtonProps) {
  const { productId } = props;
  console.log(productId);
  const [isLiked, setLiked] = useState(false);

  return (
    <Wrapper onClick={() => setLiked(!isLiked)}>
      {isLiked ? <HiHeart size={'22px'} /> : <HiOutlineHeart size={'22px'} />}
    </Wrapper>
  );
}
