import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AppWrapper } from './App.styled';
import Footer from './components/Footer';
import Header from './features/Header';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import store from './store';
import { theme } from './styles';
import GlobalStyles, { PageWrapper } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
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
      </Provider>
    </ThemeProvider>
  );
}

export default App;
