import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('../pages/MainPage'));
const GamePage = lazy(() => import('../pages/GamePage'));
const GameSeriesPage = lazy(() => import('../pages/GameSeriesPage'));
const Page404 = lazy(() => import('../pages/Page404'));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:gameId" element={<GamePage />} />
            <Route path="/:gameId/series" element={<GameSeriesPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
