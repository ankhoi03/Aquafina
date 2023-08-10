import { Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const bodyLogin = windowHeight * 0.6 - 48;
const footerLogin = windowHeight * 0.4;

export const displaySize = {
    width: windowWidth,
    height: windowHeight,
    header: 54,
    body_login: bodyLogin,
    footer_login: footerLogin,
  };