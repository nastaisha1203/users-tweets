import styled from 'styled-components';

export const Main = styled.main`
  padding: ${p => (p.home ? '25px' : '10px 25px 25px 25px')};
  text-align: ${p => p.home && 'center'};
  max-width: 1440px;
  margin: 0 auto;
`;
export const Img = styled.img`
  width: 300px;
  margin-bottom: 35px;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 42px;
  line-height: 1.22;
  text-transform: uppercase;
  text-align: ${p => p.home && 'center'};
  margin-bottom: 35px;
`;
