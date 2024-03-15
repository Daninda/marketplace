import { Helmet } from 'react-helmet-async';
import { PageWrapper } from '../../styles/global';

function ProductDetailsPage() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Страница продукта - sMarket</title>
      </Helmet>

      <h1>Product details page</h1>
    </PageWrapper>
  );
}

export default ProductDetailsPage;
