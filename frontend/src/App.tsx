import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { AppWrapper } from './App.styled';
import Footer from './components/Footer';
import Header from './features/Header';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { theme } from './styles';
import GlobalStyles from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapper>
        <Header />

        <Suspense fallback={'loading...'}>
          <HelmetProvider>
            <PublicRoutes />
            <PrivateRoutes />
          </HelmetProvider>
        </Suspense>

        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
