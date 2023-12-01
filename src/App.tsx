import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Layout } from './layouts/Layout';

const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<AboutUs />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;