import { ReactNode } from 'react';
import { Wrapper } from './styled';

type ButtonProps = {
  children: ReactNode;
};

export default function Button(props: ButtonProps) {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
}
