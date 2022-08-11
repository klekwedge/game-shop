import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('../pages/MainPage'));
const GamePage = lazy(() => import('../pages/GamePage'));

function App() {
  return (
    <Router>
      <div className="max-w-screen-xl mx-auto px-5 py-3">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:gameId" element={<GamePage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
