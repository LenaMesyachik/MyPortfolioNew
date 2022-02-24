import { createGlobalStyle } from 'styled-components';
import MontserratBold from '../assets/font/Montserrat-Bold.ttf';
import RobotoMonoRegular from '../assets/font/RobotoMono-Regular.ttf';
import MontserratSemiBold from '../assets/font/Montserrat-SemiBold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${RobotoMonoRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  }
  html{
    font-family: 'RobotoMono Regular';
    color: aquamarine;
  }
  *{
    font-family: 'RobotoMono Regular';
    color: aquamarine;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }

`;

export default Typography;