import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const bottomMargin = 24;
const sHeight = width < height ? height : width;
const sWidth = width < height ? width : height;
const dMargin = 10;
const metrics = {
  searchBarHeight: 30,
  screenWidth: sWidth,
  screenHeight: sHeight,
  navBarHeight: 60,
  tabBarHeight: 50,
  defaultMargin: dMargin,
  defaultPadding: dMargin,
  listItemHeight: sHeight / 9,
  appleSize: sHeight / 13,
  contentHeight: sHeight - 110,
  listItemWidth: sWidth - (dMargin * 2),

  buttonWidth: width * 0.8,
  buttonHeight: height / 15,
  logoSize: width / 3,
  footerHeight: width / 7,
  androidMarginBottom: bottomMargin,
  sliderThumbSize: 25,
  statusBarHeight: 20,
  circleBtnSize: 50,

  iconSizeSmall: 15,
};

export default metrics;
