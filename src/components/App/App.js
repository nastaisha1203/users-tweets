import Layout from 'components/Layout/Layout';
import Home from 'pages/Home';
import Tweets from 'pages/Tweets';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
