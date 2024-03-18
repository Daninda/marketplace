import { FC, MouseEvent, ReactNode } from 'react';
import { Wrapper } from './styled';

export interface ButtonProps {
  children: ReactNode;
  $variant?: 'primary' | 'secondary';
  $block?: boolean;
  $disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const Button: FC<ButtonProps> = ({
  children,
  $variant = 'primary',
  $block = true,
  $disabled = false,
  onClick = () => {
    console.log('lol');
  },
}) => {
  return (
    <Wrapper
      type='button'
      onClick={!$disabled ? onClick : () => {}}
      $variant={$variant}
      $block={$block}
      $disabled={$disabled}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
