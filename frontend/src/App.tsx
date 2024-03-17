import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { AppWrapper } from './App.styled';
import Footer from './components/Footer';
import Header from './features/Header';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { theme } from './styles';
import GlobalStyles, { PageWrapper } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <HelmetProvider>
        <AppWrapper>
          <Header />

          <PageWrapper>
            <Suspense fallback={<div></div>}>
              <PublicRoutes />
              <PrivateRoutes />
            </Suspense>
          </PageWrapper>

          <Footer />
        </AppWrapper>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
