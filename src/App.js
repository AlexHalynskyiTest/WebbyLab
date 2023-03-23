import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { router } from './router/router';

function App() {
  return (
      <Suspense fallback={<Loader/>}>
        <RouterProvider router={router} />
      </Suspense>
  );
}

export default App;
