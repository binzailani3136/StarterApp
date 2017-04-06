import { Platform } from 'react-native';

import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';


const Styles = {
  textInputStyle: {
    ...Fonts.style.textInput,
    width: Metrics.buttonWidth - (Metrics.defaultMargin * 2),
    height: Metrics.buttonHeight,
    alignSelf: 'center',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  textInputContainerStyle: {
    width: Metrics.buttonWidth,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  fieldInputStyle: {
    ...Fonts.style.fieldInput,
    width: Metrics.screenWidth - (Metrics.defaultMargin * 4),
    height: Metrics.buttonHeight * 0.7,
    alignSelf: 'center',
    textAlign: 'left',
    padding: 0,
  },
  fieldInputContainerStyle: {
    borderBottomWidth: 1,
  },
  button: {
    width: Metrics.buttonWidth,
    height: Metrics.buttonHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    width: Metrics.buttonWidth,
    height: Metrics.buttonHeight,
    backgroundColor: Colors.brandPrimary,
  },
  buttonSecondary: {
    width: Metrics.buttonWidth,
    height: Metrics.buttonHeight,
    backgroundColor: Colors.brandSecondary,
  },
  buttonThird: {
    width: Metrics.buttonWidth,
    height: Metrics.buttonHeight,
    backgroundColor: Colors.brandThird,
  },
  sliderTrack: {
    height: 4,
    borderRadius: 2,
    marginTop: -4,
    backgroundColor: '#e3e5e1',
  },
  sliderScrollThumb: {
    width: Metrics.sliderThumbSize,
    height: Metrics.sliderThumbSize,
    borderRadius: Metrics.sliderThumbSize / 2,
    backgroundColor: 'white',
    borderColor: Colors.brandSecondary,
    borderWidth: 5,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  horzCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullScreen: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
  },
  fixedFullScreen: {
    position: 'absolute',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    top: 0,
    left: 0,
  },
  listItemContainer: {
    width: Metrics.listItemWidth,
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.borderPrimary,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundSecondary,
    marginBottom: 5,
  },
  bigAppleImage: {
    width: Metrics.appleSize,
    height: Metrics.appleSize,
  },
  mediumAppleImage: {
    width: Metrics.appleSize / 2,
    height: Metrics.appleSize / 2,
  },
  smallAppleImage: {
    width: Metrics.appleSize / 4,
    height: Metrics.appleSize / 4,
  },
  mediumLoveImage: {
    width: Metrics.appleSize / 3.5,
    height: Metrics.appleSize / 3.5,
  },
  smallLoveImage: {
    width: Metrics.appleSize / 4,
    height: Metrics.appleSize / 4,
  },
  navBarStyle: {
    paddingHorizontal: 15,
    alignItems: 'flex-end',
    backgroundColor: Colors.brandPrimary,
    height: Metrics.navBarHeight,
    marginTop: Platform.OS === 'ios' ? -Metrics.statusBarHeight : 0,
  },
  listContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundPrimary,
  },
  imgLogo: {
    width: Metrics.logoSize,
    height: Metrics.logoSize,
    borderRadius: Metrics.logoSize / 2,
  },
  scrollViewContainer: {
    flex: 1,
    paddingTop: Metrics.defaultPadding,
  },
  avatar: {
    width: Metrics.appleSize * 3 / 2,
    height: Metrics.appleSize * 3 / 2,
    borderRadius: Metrics.appleSize * 3 / 4,
  },
  avatarMedium: {
    width: Metrics.appleSize,
    height: Metrics.appleSize,
    borderRadius: Metrics.appleSize / 2,
  },
  avatarSmall: {
    width: Metrics.appleSize * 3 / 5,
    height: Metrics.appleSize * 3 / 5,
    borderRadius: Platform.OS === 'android' ? Metrics.appleSize * 3 / 5 : Metrics.appleSize * 3 / 10,
  },
  avatarBig: {
    width: Metrics.appleSize * 2,
    height: Metrics.appleSize * 2,
    borderRadius: Metrics.appleSize,
  },
  badge: {
    width: Metrics.appleSize * 0.8,
    height: Metrics.appleSize * 0.8,
  },
  fixedScrollContent: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    height: Metrics.screenHeight - Metrics.navBarHeight - Metrics.tabBarHeight,
  },
  fieldTitleText: {
    ...Fonts.style.h6,
    color: Colors.textThird,
  },











  buttonShadow: {
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0, height: 8,
    },
    shadowColor: '#000',
    shadowRadius: 4,
    elevation: 8,
  },
  buttonShadowSmall: {
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0, height: 3,
    },
    shadowColor: '#000',
    shadowRadius: 2,
    elevation: 3,
  },
  circleButtonShadow: {
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0, height: 4,
    },
    shadowColor: '#000',
    shadowRadius: 2,
    elevation: 4,
  },
};

export default Styles;
