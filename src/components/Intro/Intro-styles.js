import styled from 'styled-components';
import img from '../../assets/svgs/intro_bg.png';
import logo from '../../assets/svgs/logo.png';

const StyledIntro = styled.div`
  width: 100%;
  margin-bottom: 0px;
  aspect-ratio: 4.5569 / 1;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  & .info {
    font-family: 'Poppins';
    font-style: normal;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 44px;

    .logo {
      width: 77px;
      height: 77px;
      background-image: url(${logo});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      bottom: -17px;
    }

    .title {
      margin-top: 0px;
      margin-bottom: 2px;
      font-weight: 500;
      font-size: 48px;
      line-height: 72px;
    }
    .location {
      margin-top: 0px;
      font-size: 16px;
      line-height: 24px;
    }
  }

  // Responsiveness
  @media screen and (max-width: 768px) {
    position: relative;
    top: 40px;
    & .info {
      padding-top: 0px;
      height: 100%;
      justify-content: center;

      .logo {
        width: 40px;
        height: 40px;
        position: absolute;
        top: -40px;
      }

      .title {
        font-size: 24px;
        line-height: 30px;
      }

      .location {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }

  @media screen and (max-width: 425px) {
    & .info {
      .title {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
`;

export default StyledIntro;
