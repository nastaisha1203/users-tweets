import homeImg from 'img/home-img.png';
import { Main, Img, Title } from './Pages.styled';

const Home = () => {
  return (
    <Main home>
      <Title>Welcome!</Title>
      <Img src={homeImg} alt="tweets" width={300} height={300} />
      <h2>In our app you can view and follow tweets</h2>
    </Main>
  );
};
export default Home;
