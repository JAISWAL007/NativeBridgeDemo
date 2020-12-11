import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, Text, View, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SwipeButton from 'rn-swipe-button';
import Icon from 'react-native-vector-icons/FontAwesome';

import Strings from '../Constant';
const DiamondIcon = () => <Icon name="diamond" color="#fff" size={20} />;

const ButtonScreen = ({navigation}) => {
  const onPress = () => {
    Alert.alert('Error', Strings.COMING_SOON, [{text: 'Ok'}]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.headerStyle}>
          <TouchableOpacity
            testID="back-button"
            onPress={() => navigation.goBack()}>
            <Icon name="angle-left" color="#fff" size={30} />
          </TouchableOpacity>
          <Text style={styles.title}>{Strings.BUTTON_SCREEN}</Text>
          <TouchableOpacity
            testID="user-details"
            onPress={() => navigation.navigate('UserDetails')}>
            <Icon name="home" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.buttonTextStyle, styles.colorText]}>
        {Strings.VARIATION_OF_BUTTON}
      </Text>
      <Text
        style={[styles.buttonTextStyle]}
        onPress={onPress}
        testID="button-1">
        {Strings.PRESS_ME}
      </Text>
      <TouchableOpacity
        style={[styles.buttonWrapperStyle, styles.buttonBackgroundColor]}
        onPress={onPress}
        testID="button-2">
        <Text style={styles.buttonTextStyle}> {Strings.PRESS_ME}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress} style={styles.buttonWrapperStyle}>
        <Text
          style={[styles.buttonTextStyle, styles.textColor]}
          testID="button-3">
          {' '}
          {Strings.PRESS_ME}
        </Text>
      </TouchableOpacity>
      <SwipeButton
        railBackgroundColor="black"
        testID="slider-button"
        thumbIconStyles={styles.borderRadius}
        thumbIconComponent={DiamondIcon}
        railBorderColor="#333"
        railFillBorderColor="#33adff"
        railFillBackgroundColor="#333"
        titleColor="#33adff"
        thumbIconBackgroundColor="#33adff"
        title={Strings.SLIDE_ME_TO_CONTINUE}
        railStyles={styles.sliderBackgroundColorStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  subContainer: {
    flex: 1,
  },
  colorText: {
    color: 'yellow',
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 28,
    margin: 10,
    color: '#fff',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    marginTop: 10,
  },
  buttonWrapperStyle: {
    backgroundColor: '#33adff',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 10,
  },
  buttonBackgroundColor: {
    backgroundColor: '#333333',
  },
  buttonTextStyle: {
    fontSize: 16,
    textAlign: 'center',
    margin: 15,
    color: '#66b3ff',
  },
  textColor: {
    color: '#fff',
  },
  sliderBackgroundColorStyle: {
    backgroundColor: '#33300088',
    borderRadius: 10,
  },
  borderRadius: {
    borderRadius: 10,
  },
});

ButtonScreen.prototype = {
  navigation: PropTypes.objectOf({
    navigate: PropTypes.func,
  }).isRequired,
};
export default ButtonScreen;
