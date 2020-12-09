import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  NativeModules,
  View,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Strings from '../Constant';

const DummyScreen = ({navigation}) => {
  const [isEmulator, setIsEmulator] = React.useState('');
  const storeUserName = useSelector((state) => state?.UserDetails?.name);

  const checkIsEmulator = async () => {
    const {DeviceDetails} = NativeModules;
    const emulator = await DeviceDetails.isEmulator();
    setIsEmulator(emulator);
  };

  React.useEffect(() => {
    checkIsEmulator();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="angle-left" color="#000" size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>{Strings.DASHBOARD}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ButtonScreen')}>
          <Icon name="angle-right" color="#000" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.displayStyle}>
        <Text>Welcome {storeUserName}</Text>
        <Text>Running on {isEmulator ? 'Emulator' : 'Devices'}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayStyle: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default DummyScreen;
