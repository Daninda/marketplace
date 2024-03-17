import { Helmet } from 'react-helmet-async';
import ProductCard from '../../components/ProductCard';
import ProductGroup from '../../components/ProductGroup/ProductGroup';
import testData from '../../store/TestData';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Главная - sMarket</title>
      </Helmet>

      <ProductGroup title='Рекомендуемые'>
        <>
          {testData.map(product => (
            <ProductCard {...product} key={product.id} />
          ))}
        </>
      </ProductGroup>
    </>
  );
}

export default HomePage;
