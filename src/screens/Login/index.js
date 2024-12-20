import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, sizes} from '../../services';
import {images} from '../../services/utilities/images';
import Button from '../../components/Button';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logo} />

      <View style={styles.inputView}>
        <TextInput
          placeholder="USERNAME OR EMAIL"
          style={styles.input}
          placeholderTextColor={colors.placeholdertext}
        />
      </View>
      <TextInput
        placeholder="PASSWORD"
        style={styles.input}
        placeholderTextColor={colors.placeholdertext}
      />
      <View style={styles.btnTop}>
        <Button title={'LOG IN'} red={true} />
      </View>

      <View style={styles.btnContainer}>
        <Text style={styles.text}>
          FORGOT PASSWORD?{' '}
          <TouchableOpacity style={{}}>
            <Text style={styles.linkText}>CLICK HERE</Text>
          </TouchableOpacity>
        </Text>
      </View>

      <View style={styles.btnTop}>
        <Button title={'LOG IN WITH GOOGLE'} italic={true} />
      </View>
      <Button title={'CREATE NEW ACCOUNT'} italic={true} />

      <Image source={images.legends} style={styles.legends} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greenBg,
    flex: 1,
  },
  logo: {
    height: sizes.screenHeight * 0.2,
    width: sizes.screenHeight * 0.2,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.03,
  },
  input: {
    backgroundColor: colors.greenBg,
    borderWidth: 1,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.04,
    padding: sizes.screenHeight * 0.01,
    color: colors.black,
  },
  inputView: {
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.03,
  },
  btnTop: {
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.02,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  linkText: {
    color: '#1137F2',
    textDecorationLine: 'underline',
    fontWeight: '700',
    fontStyle: 'italic',
    fontSize: 16,
  },
  btnTop: {
    marginTop: sizes.screenHeight * 0.1,
    marginBottom: sizes.screenHeight * 0.01,
  },
  legends: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenHeight * 0.15,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.02,
  },
});
