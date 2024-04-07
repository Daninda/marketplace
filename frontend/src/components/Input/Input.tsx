import { FC, InputHTMLAttributes } from 'react';
import { InputWrapper, Wrapper } from './styled';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
}

const Input: FC<IInputProps> = ({ icon, ...props }) => {
  return (
    <Wrapper>
      <InputWrapper {...props} />
      {icon}
    </Wrapper>
  );
};

export default Input;
