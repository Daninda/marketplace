import { FC, MouseEvent, ReactNode } from 'react';
import { Wrapper } from './styled';

export interface IButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  $variant?: 'primary' | 'secondary' | 'tertiary';
  $block?: boolean;
  $disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const Button: FC<IButtonProps> = ({
  children,
  icon,
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
      {icon}
      {children}
    </Wrapper>
  );
};

export default Button;
