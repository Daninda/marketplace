import { FC, useState } from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi2';
import { Wrapper } from './styled';

interface LikeButtonProps {
  productId?: number;
}

const LikeButton: FC<LikeButtonProps> = () => {
  const [isLiked, setLiked] = useState(false);

  return (
    <Wrapper onClick={() => setLiked(!isLiked)}>
      {isLiked ? <HiHeart size={'22px'} /> : <HiOutlineHeart size={'22px'} />}
    </Wrapper>
  );
};

export default LikeButton;
