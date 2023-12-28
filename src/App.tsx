import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Layout } from './layouts/Layout';

const Partners = lazy(() => import('./pages/Partners/Partners'));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Partners />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;