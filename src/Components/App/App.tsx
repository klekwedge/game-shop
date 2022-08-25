import React, { lazy, Suspense } from 'react';
import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const GamePage = lazy(() => import('../pages/GamePage/GamePage'));
const Page404 = lazy(() => import('../pages/Page404/Page404'));
const GenrePage = lazy(() => import('../pages/GenrePage/GenrePage'));
const GenresPage = lazy(() => import('../pages/GenresPage/GenresPage'));

function App() {
  return (
    <Router>
      <Box p="10px 20px" className="flex flex-col items-center">
        <Header />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:gameId" element={<GamePage />} />
            <Route path="/games/:genre" element={<GenrePage />} />
            <Route path="/genres" element={<GenresPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </Box>
    </Router>
  );
}

export default App;
