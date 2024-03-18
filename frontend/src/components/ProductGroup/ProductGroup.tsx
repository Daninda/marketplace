import { FC, ReactNode } from 'react';
import { Title, Wrapper } from './styled';

interface ProductGroupProps {
  title: string;
  children: ReactNode;
}

const ProductGroup: FC<ProductGroupProps> = ({ title, children }) => {
  return (
    <section>
      <Title>{title}</Title>
      <Wrapper>{children}</Wrapper>
    </section>
  );
};

export default ProductGroup;
