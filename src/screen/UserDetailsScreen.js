import React, {useState} from 'react';
import {Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {userAction} from '../redux/actions';
import {useDispatch} from 'react-redux';
import Strings from '../Constant';

const UserDetailsScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const onPress = () => {
    if (userName) {
      dispatch(userAction(userName));
      navigation.navigate('PostLogin', {
        screen: 'Dashboard',
      });
    } else {
      alert(Strings.PLEASE_ENTER_NAME);
    }
  };

  const validateUserName = (name) => {
    if (name) {
      return setUserName(name);
    }
    setUserName('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleStyle}>{Strings.USER_NAME}</Text>
      <TextInput
        onChangeText={validateUserName}
        placeholder={Strings.ENTER_USER_NAME}
        style={styles.inputStyle}
        returnKeyType="done"
      />
      <TouchableOpacity onPress={onPress} style={styles.wrapperCustom}>
        <Text style={styles.buttonTitleStyle}>{Strings.NEXT}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'gray',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  inputStyle: {
    height: 50,
    borderWidth: 0,
    width: '100%',
    marginBottom: 10,
    paddingLeft: 20,
    borderColor: '#C7F5F3',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonTitleStyle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  wrapperCustom: {
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    padding: 6,
    backgroundColor: '#0ED814',
    marginBottom: 20,
  },
});

export default UserDetailsScreen;
