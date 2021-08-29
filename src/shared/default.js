// Core
import { createGlobalStyle } from "styled-components";

// Fonts
import RobotoLight from "../assets/fonts/Roboto-Light.ttf";
import RobotoMedium from "../assets/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";

export const GlobalFonts = createGlobalStyle`
  /* Roboto */
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Light'), local('Roboto-Light'), url(${RobotoLight}) format('truetype');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Regular'), local('Roboto-Regular'), url(${RobotoRegular}) format('truetype');
    font-weight: 400;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Medium'), local('Roboto-Medium'), url(${RobotoMedium}) format('truetype');
    font-weight: 500;
  }
  
`;
