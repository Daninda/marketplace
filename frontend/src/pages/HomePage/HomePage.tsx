import { Helmet } from 'react-helmet-async';
import ProductCard from '../../components/ProductCard';
import ProductGroup from '../../components/ProductGroup/ProductGroup';
import testData from '../../store/TestData';
import { PageWrapper } from '../../styles/global';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Главная - sMarket</title>
      </Helmet>

      <PageWrapper>
        <ProductGroup title='Рекомендуемые'>
          <>
            {testData.map(product => (
              <ProductCard {...product} key={product.id} />
            ))}
          </>
        </ProductGroup>
      </PageWrapper>
    </>
  );
}

export default HomePage;
