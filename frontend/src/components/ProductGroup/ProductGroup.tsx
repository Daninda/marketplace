import { ReactNode } from 'react';
import { Title, Wrapper } from './styled';

type ProductGroupProps = {
  title: string;
  children: ReactNode;
};

export default function ProductGroup(props: ProductGroupProps) {
  const { title, children } = props;

  return (
    <section>
      <Title>{title}</Title>
      <Wrapper>{children}</Wrapper>
    </section>
  );
}
