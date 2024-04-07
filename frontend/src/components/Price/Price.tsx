import { FC } from 'react';
import { PriceDiscounted, PriceRegular, PriceRegularIfDiscounted, Wrapper } from './styled';

interface IPriceProps {
  priceRegular: number;
  priceDiscounted?: number;
}

const Price: FC<IPriceProps> = ({ priceRegular, priceDiscounted }) => {
  return (
    <Wrapper>
      {priceDiscounted ? (
        <>
          <PriceDiscounted>
            {Math.round(priceDiscounted).toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
              maximumFractionDigits: 0,
            })}
          </PriceDiscounted>
          <PriceRegularIfDiscounted>
            {Math.round(priceRegular).toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
              maximumFractionDigits: 0,
            })}
          </PriceRegularIfDiscounted>
        </>
      ) : (
        <PriceRegular>
          {Math.round(priceRegular).toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            maximumFractionDigits: 0,
          })}
        </PriceRegular>
      )}
    </Wrapper>
  );
};

export default Price;
