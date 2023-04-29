import styled from 'styled-components';
import bgImg from 'img/bg-img.png';
import bgImgRetina from 'img/bg-imgX2.png';

export const CardWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 36px;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  box-shadow: -2.58px 6.87px 20.62px rgba(0, 0, 0, 0.23);
  background-image: url(${bgImg}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 308px 168px, 100% 100%;
  background-repeat: no-repeat;
  background-position: 36px 28px, 100% 100%;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bgImgRetina}),
      linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  }
`;

export const Logo = styled.img`
  padding-left: 20px;
`;
export const Line = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  margin-top: 172px;
  margin-bottom: 62px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Border = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;
export const Img = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: #4b2a99;
`;
export const Text = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: ${props => (props.tweets ? '16px' : '26px')};
`;
export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 196px;
  height: 50px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;

  background-color: ${props => (props.following ? '#5CD3A8' : '#EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;

  cursor: pointer;
`;
