import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Commontextinput from '../CommonTextinput';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [emailerror, setemailerror] = useState(false);
  const [passworderror, setpassworderror] = useState(false);
  const validate = () => {
    if (!email) {
      setemailerror(true);
    } else {
      setemailerror(false);
    }

    if (!password) {
      setpassworderror(true);
    } else {
      setpassworderror(false);
    }
    getdata();
  };
  const getdata = async () => {
    let memail = await AsyncStorage.getItem('Email');
    let mpassword = await AsyncStorage.getItem('Password');
    if (memail == email && mpassword == password) {
      navigation.navigate('Home');
    } else {
      Alert.alert('please enter correct details');
    }
  };

  const Data = () => {
    validate();
    navigation.navigate('Viewdata');
  };
  return (
    <View style={styles.mainview}>
      <Text style={{fontSize: 60, color: 'black', alignSelf: 'center'}}>
        Login
      </Text>

      <Commontextinput
        icon={require('../srcimage/email.png')}
        placeholder={'Enter Email'}
        value={email}
        style={{marginLeft: 10, color: 'black', fontSize: 30}}
        onchangetext={text => setemail(text)}
      />
      {emailerror ? (
        <Text style={{fontSize: 15, color: 'red'}}>Please enter email</Text>
      ) : null}

      <Commontextinput
        value={password}
        icon={require('../srcimage/padlock.png')}
        placeholder={'Enter Password'}
        style={{marginLeft: 10, color: 'black', fontSize: 30}}
        onchangetext={text => setpassword(text)}
      />
      {passworderror ? (
        <Text style={{fontSize: 15, color: 'red'}}>Please enter password</Text>
      ) : null}
      <TouchableOpacity style={styles.touchopacitybtn}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
          }}
          onPress={() => Data()}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchopacity}>
        <Text
          style={{
            fontSize: 40,
            color: 'black',
            textDecorationLine: 'underline',
            fontWeight: 600,
          }}
          onPress={() => navigation.navigate('Signup')}>
          Create New Account!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    marginTop: 40,
  },
  touchopacity: {
    marginTop: 25,
    alignSelf: 'center',
  },
  touchopacitybtn: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'black',
    marginTop: 25,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
