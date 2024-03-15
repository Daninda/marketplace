import { Helmet } from 'react-helmet-async';
import { PageWrapper } from '../../styles/global';

function HomePage() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Главная - sMarket</title>
      </Helmet>

      <h1>Home page</h1>
    </PageWrapper>
  );
}

export default HomePage;
