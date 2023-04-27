import { Header, Link, Navigation } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Navigation>
        <Link to="/" end>
          Home
        </Link>
        <Link to="tweets">Tweets</Link>
      </Navigation>
    </Header>
  );
};

export default AppBar;
