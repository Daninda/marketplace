import Button from '@components/Button/Button';
import Input from '@components/Input';
import { selectIsLogged } from '@features/App/selectors';
import { paths } from '@routes/helpers';
import { useAppSelector } from '@store/hooks';
import { ChangeEvent, FC, useCallback, useState } from 'react';
import {
  HiMenu,
  HiOutlineBell,
  HiOutlineCube,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiSearch,
} from 'react-icons/hi';
import { LinkWrapper, Logo, Wrapper } from './styled';

const Header: FC = () => {
  const isLogged = useAppSelector(selectIsLogged);
  const [search, setSearch] = useState('');

  const changeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  return (
    <Wrapper>
      <LinkWrapper to={paths.home}>
        <Logo src='/logo.png' />
      </LinkWrapper>
      <Button icon={<HiMenu size={'2.2rem'} />} $block={false}>
        Каталог
      </Button>
      <Input icon={<HiSearch size={'2.2rem'} />} type='search' placeholder='Поиск...' />
      {isLogged ? (
        <>
          <LinkWrapper to={paths.home}>
            <HiOutlineCube size={'2.2rem'} />
          </LinkWrapper>
          <LinkWrapper to={paths.home}>
            <HiOutlineHeart size={'2.2rem'} />
          </LinkWrapper>
          <LinkWrapper to={paths.home}>
            <HiOutlineBell size={'2.2rem'} />
          </LinkWrapper>
          <LinkWrapper to={paths.home}>
            <HiOutlineShoppingCart size={'2.2rem'} />
          </LinkWrapper>
        </>
      ) : (
        <Button $block={false} $variant='tertiary'>
          Войти
        </Button>
      )}
    </Wrapper>
  );
};

export default Header;
