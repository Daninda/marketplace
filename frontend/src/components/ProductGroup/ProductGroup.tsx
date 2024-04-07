import { FC, ReactNode } from 'react';
import { Title, Wrapper } from './styled';

interface IProductGroupProps {
  title: string;
  children: ReactNode;
}

const ProductGroup: FC<IProductGroupProps> = ({ title, children }) => {
  return (
    <section>
      <Title>{title}</Title>
      <Wrapper>{children}</Wrapper>
    </section>
  );
};

export default ProductGroup;
