import React from 'react';
import {
  Platform,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from 'react-native-i18n';
import { MKButton, MKSwitch, MKCheckbox } from 'react-native-material-kit';

import { Metrics, Styles, Icons, Colors, Fonts, Images } from '@theme/';
import Utils from '@src/utils';
import styles from './styles';


const CommonWidgets = {
  renderStatusBar(color) {
    return (
      <StatusBar
        backgroundColor={color}
        barStyle={'light-content'}
        translucent
      />
    );
  },
  renderNavBarHeader(headerText) {
    return (
      <View style={Styles.center}>
        <Text
          style={[Fonts.style.h4,
            { textAlign: 'center',
              width: Metrics.screenWidth * 0.7,
              color: Colors.textPrimary }]}
          numberOfLines={1}>
          {headerText}
        </Text>
      </View>
    );
  },
  renderSpacer(count) {
    return (
      <View style={{ height: (Metrics.screenHeight / 40) * count }} />
    );
  },



  renderMaterialButton(text, color, onPress) {
    return (
      <MKButton
        style={Styles.button}
        backgroundColor={color}
        onPress={onPress}>
        <Text style={Fonts.style.buttonText}>
          {text}
        </Text>
      </MKButton>
    );
  },
  renderAddButton(text, color, onPress) {
    return (
      <TouchableOpacity
        style={[Styles.center,
          { width: Metrics.screenWidth * 0.15, backgroundColor: color, position: 'absolute', right: 0, bottom: 0, borderRadius: 3 }]}
        backgroundColor={color}
        onPress={onPress}>
        <Text style={[Fonts.style.h6, { color: Colors.textPrimary }]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  },
  renderCloseButton(onPress) {
    return (
      <TouchableOpacity
        style={{ position: 'absolute', left: 20, top: Platform.OS === 'android' ? 25 : 30 }}
        onPress={onPress}>
        <Icon name="times" size={20} color={Colors.textPrimary} />
      </TouchableOpacity>
    );
  },
  renderNavBarLeftButton(onPress, icon = 'back') {
    let iconName = 'chevron-left';
    if (icon === 'close') iconName = 'times';
    return (
      <TouchableOpacity
        style={{ paddingBottom: Platform.OS === 'android' ? 5 : 5 }}
        onPress={onPress} >
        <Icon name={iconName} size={30} color={Colors.textPrimary} />
      </TouchableOpacity>
    );
  },
  renderFloatButton(onPress) {
    return (
      <MKButton
        style={{ position: 'absolute', bottom: 10, right: 10, padding: 15 }}
        backgroundColor={Colors.brandPrimary}
        shadowRadius={2}
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.5}
        shadowColor={'black'}
        fab
        onPress={onPress}>
        <Image
          pointerEvents="none"
          source={Icons.trend}
          style={{ width: 30, height: 30 }}
          resizeMode={'contain'} />
      </MKButton>
    );
  },
  renderForwardIcon() {
    return (
      <View style={styles.forwardIconContainer}>
        <Icon
          style={{ marginTop: 5 }}
          name={'chevron-right'}
          size={20}
          color={Colors.textThird}
        />
      </View>
    );
  },
  renderUserListItem(item, onPress, showBorderTop = true) {
    return (
      <MKButton
        key={item.id}
        style={{ width: Metrics.screenWidth,
          height: Metrics.screenHeight / 10,
          borderTopWidth: showBorderTop === true ? 1 : 0,
          borderBottomWidth: showBorderTop === false ? 1 : 0,
          borderColor: Colors.borderPrimary,
          flexDirection: 'row',
          backgroundColor: 'transparent' }}
        onPress={onPress}>
        <View style={[Styles.center, { flex: 3 }]}>
          <Image
            style={Styles.avatarMedium}
            source={{ uri: item.avatar }} />
        </View>
        <View style={[{ flex: 8, justifyContent: 'center', marginLeft: 10 }]}>
          <Text style={[Fonts.style.h6, { color: Colors.brandPrimary }]}>
            {item.name}
          </Text>
          <Text style={Fonts.style.defaultText}>
            {item.occupation}
          </Text>
          <Text style={Fonts.style.listItemDescriptionText}>
            30 posts and 105 apples ate.
          </Text>
        </View>
        {CommonWidgets.renderForwardIcon()}
      </MKButton>
    );
  },
  renderTopicListItem(item, onPress) {
    return (
      <MKButton
        key={item.id}
        style={Styles.listItemContainer}
        backgroundColor={Colors.backgroundSecondary}
        onPress={onPress}>

        <View style={Styles.horzCenter}>
          <View style={[Styles.center, { flex: 3 }]}>
            {item.isTop10 ?
              this.renderApple(0, 'big') : this.renderApple(2, 'big')}
          </View>
          <View style={{ flex: 12 }}>
            <Text style={Fonts.style.listItemTitleText} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={Fonts.style.listItemDescriptionText} numberOfLines={1}>
              3{I18n.t('TIPS_FOUND')}
            </Text>
          </View>
          {this.renderForwardIcon()}
        </View>
      </MKButton>
    );
  },

  renderCheckboxTopicListItem(item, onPress) {
    return (
      <MKButton
        key={item.id}
        style={Styles.listItemContainer}
        backgroundColor={Colors.backgroundSecondary}
        onPress={onPress}>
        <View style={Styles.horzCenter}>
          <View style={[Styles.center, { flex: 3 }]}>
            {item.isTop10 ?
              this.renderApple(0, 'big') : this.renderApple(2, 'big')}
          </View>
          <View style={{ flex: 12 }}>
            <Text style={Fonts.style.listItemTitleText} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={Fonts.style.listItemDescriptionText} numberOfLines={1}>
              3{I18n.t('TIPS_FOUND')}
            </Text>
          </View>
          <View style={styles.checkboxIconContainer}>
            <MKCheckbox
              checked={false}
            />
          </View>
        </View>
      </MKButton>
    );
  },

  renderTipListItem(item, onPress) {
    return (
      <MKButton
        key={item.id}
        style={Styles.listItemContainer}
        backgroun dColor={Colors.backgroundSecondary}
        onPress={onPress}>
        <View style={Styles.horzCenter}>
          <View style={[Styles.horzCenter, { flex: 10 }]}>
            {this.renderTipDetails(item, false, () => {})}
          </View>
          {this.renderForwardIcon()}
        </View>
      </MKButton>
    );
  },


  renderFieldTitle(text) {
    return (
      <Text style={Styles.fieldTitleText}>
        {text}
      </Text>
    );
  },
  renderSettingSwitchGroup(title, desc, onChange) {
    return (
      <View>
        <View style={Styles.horzCenter}>
          <Text style={[Fonts.style.fieldInput, { flex: 4 }]}>
            {title}
          </Text>
          <MKSwitch
            style={{ flex: 1 }}
            checked
            trackSize={25}
            trackLength={50}
            onColor={Colors.rippleSecondary}
            thumbOnColor={Colors.brandSEcondary}
            thumbOffColor={Colors.textThird}
            rippleColor={Colors.rippleSecondary}
            onCheckedChange={onChange} />
        </View>
        <Text
          style={[Fonts.style.listItemDescriptionText, {
            lineHeight: 14,
            color: Colors.fieldPlaceholder,
            marginTop: Platform.OS === 'ios' ? -Metrics.defaultMargin / 2 : -Metrics.defaultMargin }]}>
          {desc}
        </Text>
      </View>
    );
  },
  renderSettingHelpButtons(text, onPress) {
    return (
      <View>
        {this.renderSpacer(0.5)}
        <TouchableOpacity onPress={onPress}>
          <Text style={Fonts.style.fieldInput}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
};



export default CommonWidgets;