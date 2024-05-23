import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Commontextinput from '../CommonTextinput';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [mobile, setmobile] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [nameerror, setnameerror] = useState(false);
  const [mobileerror, setmobileerror] = useState(false);
  const [emailerror, setemailerror] = useState(false);
  const [passworderror, setpassworderror] = useState(false);
  const [confirmpassworderror, setconfirmpassworderror] = useState(false);

  const validate = () => {
    if (!name) {
      setnameerror(true);
    } else {
      setnameerror(false);
    }
    if (!mobile || mobile.length < 10) {
      setmobileerror(true);
    } else {
      setmobileerror(false);
    }
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
    if (!confirmpassword || password !== confirmpassword) {
      setconfirmpassworderror(true);
    } else {
      setconfirmpassworderror(false);
    }
    if (
      !name ||
      !mobile ||
      mobile.length < 10 ||
      !email ||
      !password ||
      !confirmpassword ||
      password != confirmpassword
    ) {
      return false;
    } else {
      navigation.navigate('Login');
    }
    setdata();
  };
  const setdata = async () => {
    await AsyncStorage.setItem('Name', name);
    await AsyncStorage.setItem('Mobile', mobile);
    await AsyncStorage.setItem('Email', email);
    await AsyncStorage.setItem('Password', password);
    await AsyncStorage.setItem('Confirmpassword', confirmpassword);
  };
  return (
    <ScrollView style={styles.mainview}>
      <Text style={{fontSize: 35, color: 'black', alignSelf: 'center'}}>
        Signup
      </Text>
      <Commontextinput
        value={name}
        icon={require('../srcimage/name.png')}
        placeholder={'Enter Name'}
        style={{marginLeft: 10, color: 'black', fontSize: 30}}
        onchangetext={text => setname(text)}
      />
      {nameerror ? (
        <Text
          style={{fontSize: 15, color: 'red', marginLeft: 15, marginTop: 5}}>
          Please enter name
        </Text>
      ) : null}
      <Commontextinput
        value={mobile}
        keyboardType={'keybpoardtype'}
        icon={require('../srcimage/mobile.png')}
        placeholder={'Enter Mobile'}
        style={{marginLeft: 10, color: 'black', fontSize: 30}}
        onchangetext={text => setmobile(text)}
      />
      {mobileerror ? (
        <Text
          style={{fontSize: 15, color: 'red', marginLeft: 15, marginTop: 5}}>
          Please enter mobile
        </Text>
      ) : null}
      <Commontextinput
        value={email}
        icon={require('../srcimage/email.png')}
        placeholder={'Enter Email'}
        style={{marginLeft: 10, color: 'black', fontSize: 30,paddingRight:10}}
        onchangetext={text => setemail(text)}
      />
      {emailerror ? (
        <Text
          style={{fontSize: 15, color: 'red', marginLeft: 15, marginTop: 5}}>
          Please enter email
        </Text>
      ) : null}
      <Commontextinput
        value={password}
        icon={require('../srcimage/padlock.png')}
        placeholder={'Enter Password'}
        style={{marginLeft: 10, color: 'black', fontSize: 30}}
        onchangetext={text => setpassword(text)}
      />
      {passworderror ? (
        <Text
          style={{fontSize: 15, color: 'red', marginLeft: 15, marginTop: 5}}>
          Please enter password
        </Text>
      ) : null}
      <Commontextinput
        value={confirmpassword}
        icon={require('../srcimage/padlock.png')}
        placeholder={'Enter Confirm Password'}
        style={{marginLeft: 10, color: 'black', fontSize: 27}}
        onchangetext={text => setconfirmpassword(text)}
      />
      {confirmpassworderror ? (
        <Text
          style={{fontSize: 15, color: 'red', marginLeft: 15, marginTop: 5}}>
          Please enter same password
        </Text>
      ) : null}
      <TouchableOpacity
        style={styles.touchopacitybtn}
        onPress={() => validate()}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
          }}>
          Signup
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
          onPress={() => navigation.navigate('Login')}>
          Already have Account!
        </Text>
      </TouchableOpacity>
    </ScrollView>

  );
};

export default Signup;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
  },
  touchopacity: {
    marginTop: 10,
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
