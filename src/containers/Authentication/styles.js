import { StyleSheet } from 'react-native';
import { Styles, Fonts, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  bodyContainer: {
    flex: 5,
    alignItems: 'center',
    marginTop: -Metrics.screenHeight / 15,
  },
  imgAvatar: {
    width: Metrics.logoSize,
    height: Metrics.logoSize,
    borderRadius: Metrics.logoSize / 2,
  },
  forgotTextStyle: {
    width: Metrics.buttonWidth,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.textPrimary,
    letterSpacing: 1,
    includeFontPadding: true,
  },
  forgotPwdContainer: {
    marginTop: 10,
    padding: 0,
    width: Metrics.buttonWidth,
    alignItems: 'flex-end',
  },
  orContainer: {
    paddingVertical: 5,
    alignItems: 'center',
  },
  bottomAreaLogin: {
    ...Styles.center,
    flexDirection: 'row',
    height: Metrics.screenHeight / 10,
  },
  bottomAreaRegister: {
    ...Styles.center,
    flexDirection: 'column',
    height: Metrics.screenHeight / 10,
  },
});
