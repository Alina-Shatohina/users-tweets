import { lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
import  SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Tweets = lazy(() => import('../pages/Tweets/Tweets'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
  <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
  </Routes>
  );
};
