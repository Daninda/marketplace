import { FC, useState } from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { Wrapper } from './styled';

interface ILikeButtonProps {
  productId?: number;
}

const LikeButton: FC<ILikeButtonProps> = () => {
  const [isLiked, setLiked] = useState(false);

  return (
    <Wrapper onClick={() => setLiked(!isLiked)}>
      {isLiked ? <HiHeart size={'22px'} /> : <HiOutlineHeart size={'22px'} />}
    </Wrapper>
  );
};

export default LikeButton;
