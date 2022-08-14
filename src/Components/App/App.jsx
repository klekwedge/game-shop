import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';

const MainPage = lazy(() => import('../pages/MainPage'));
const GamePage = lazy(() => import('../pages/GamePage'));
const GameSeriesPage = lazy(() => import('../pages/GameSeriesPage'));
const Page404 = lazy(() => import('../pages/Page404'));
const GenrePage = lazy(() => import('../pages/GenrePage'));

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center">
        <Header />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:gameId" element={<GamePage />} />
            <Route path="/:gameId/series" element={<GameSeriesPage />} />
            <Route path="/games/:genre" element={<GenrePage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
