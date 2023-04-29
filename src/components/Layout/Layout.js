import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
