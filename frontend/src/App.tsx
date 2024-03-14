import { Suspense } from 'react';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

function App() {
  return (
    <Suspense fallback={'loading...'}>
      <PublicRoutes />
      <PrivateRoutes />
    </Suspense>
  );
}

export default App;
