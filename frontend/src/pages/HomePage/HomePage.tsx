import { Helmet } from 'react-helmet';
import { TestDiv } from './styled';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Главная - sMarket</title>
      </Helmet>

      <TestDiv>
        <h1>Home page</h1>
      </TestDiv>
    </>
  );
}

export default HomePage;
