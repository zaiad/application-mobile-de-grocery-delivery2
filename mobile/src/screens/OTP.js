import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const OtpScreen = ({route, navigation}) => {
  const [code, setCode] = useState();
  const {email} = route.params;

  const handleVerify = async () => {
    try {
      const response = await axios.post(
        `http://192.168.43.66:1337/api/verify-otp`,
        {
          otp: code,
          email,
        },
      );
      if (response.status === 401)
        alert('Please try to register with another email adress');
      if (response.status === 400) alert('Invalid OTP Code');
      if (response.status === 200) navigation.navigate('Login');

    } catch (error) {
      if(error.response?.status === 400) alert('Invalid OTP')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Verification Code</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="####"
          value={code}
          onChangeText={setCode}
          maxLength={4}
          keyboardType="number-pad"
        />
      </View>
      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendButtonText}>Resend Code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    width: 120,
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#008080',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resendButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  resendButtonText: {
    color: '#008080',
    fontSize: 18,
  },
  verifyButton: {
    backgroundColor: '#008080',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default OtpScreen;
