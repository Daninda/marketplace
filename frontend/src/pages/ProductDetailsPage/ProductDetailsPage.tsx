import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const ProductDetailsPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Страница продукта - sMarket</title>
      </Helmet>

      <h1>Product details page</h1>
    </>
  );
};

export default ProductDetailsPage;
