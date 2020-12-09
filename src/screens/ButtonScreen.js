import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SwipeButton from 'rn-swipe-button';
import Icon from 'react-native-vector-icons/FontAwesome';

import Strings from '../Constant';
const DiamondIcon = () => <Icon name="diamond" color="#fff" size={20} />;

const ButtonScreen = ({navigation}) => {
  const onPress = () => {
    alert(Strings.COMING_SOON);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.headerStyle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" color="#fff" size={30} />
          </TouchableOpacity>
          <Text style={styles.title}>{Strings.BUTTON_SCREEN}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('UserDetails')}>
            <Icon name="home" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.buttonTextStyle, styles.colorText]}>
        {Strings.VARIATION_OF_BUTTON}
      </Text>
      <Text style={[styles.buttonTextStyle]} onPress={onPress}>
        {Strings.PRESS_ME}
      </Text>
      <TouchableOpacity
        style={[styles.buttonWrapperStyle, styles.buttonBackgroundColor]}
        onPress={onPress}>
        <Text style={styles.buttonTextStyle}> {Strings.PRESS_ME}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress} style={styles.buttonWrapperStyle}>
        <Text style={[styles.buttonTextStyle, styles.textColor]}>
          {' '}
          {Strings.PRESS_ME}
        </Text>
      </TouchableOpacity>
      <SwipeButton
        railBackgroundColor="black"
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

export default ButtonScreen;
