import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
 } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import I18n from 'react-native-i18n';

import { replaceRoute } from '@actions/route';
import CommonWidgets from '@components/CommonWidgets';

import { Styles, Images, Colors, Fonts } from '@theme/';
import Utils from '@src/utils';
import styles from './styles';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  onTextInputFocus(value) {
    this.setState({ [`${value}Focus`]: true });
  }

  doResetPassword() {
    this.props.replaceRoute('login');
  }
/*source={Images.bkgLogin}*/
  render() {
    return (
      <KeyboardAwareScrollView
        style={{ flex: 1, backgroundColor: Colors.brandPrimary }}
        automaticallyAdjustContentInsets={false}>
        <View style={Styles.fullScreen}>
          {CommonWidgets.renderStatusBar('transparent')}
          <Image
            resizeMode={'stretch'}
            style={ Styles.fixedFullScreen } />
          <View style={{ flex: 3 }} />
          {/* -----Body---- */}
          <View style={styles.bodyContainer}>
            <View
              style={[Styles.textInputContainerStyle,
              { borderColor: Utils.getTextInputBorderColor(this.state.emailFocus) }]}>
              <Text style={[styles.forgotTextStyle, Fonts.style.h4]}>
                {I18n.t('FORGOT_YOUR')}
              </Text>
              {CommonWidgets.renderSpacer(1)}
              <Text style={[styles.forgotTextStyle, Fonts.style.bottomText, { marginTop: 5 }]}>
                {I18n.t('ENTER_RESET_EMAIL')}
              </Text>
              {CommonWidgets.renderSpacer(0.5)}
              <TextInput
                style={Styles.textInputStyle}
                underlineColorAndroid={'transparent'}
                placeholder={I18n.t('EMAIL')}
                placeholderTextColor={Colors.textPlaceholder}
                multiline={false}
                onChangeText={text => this.setState({ email: text })}
                keyboardType={'email-address'}
                returnKeyType={'next'}
                onSubmitEditing={() => this.doResetPassword()}
                onFocus={() => this.onTextInputFocus('email')} />
            </View>
            {CommonWidgets.renderSpacer(1)}
            {CommonWidgets.renderMaterialButton(I18n.t('RESET_PASSWORD'),
              Colors.brandSecondary, () => this.doResetPassword())}
          </View>
          {CommonWidgets.renderCloseButton(() => this.props.replaceRoute('login'))}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

ForgotPassword.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}
function mapStateToProps(state) {
  return { };
}
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
