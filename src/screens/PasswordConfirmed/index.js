import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {colors, fontSize, sizes} from '../../services';
import {images} from '../../services/utilities/images';

export default function PasswordConfirmed() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>PASSWORD CONFIRMED</Text>
      <Text style={styles.content}>LETS TRY LOGIN TO YOUR ACCOUNT NOW</Text>

      <View style={styles.btnTop}>
        <Button title={'LOG IN TO YOUR ACCOUNT'} italic={true} />
      </View>

      <Image source={images.legends} style={styles.legends} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greenBg,
    flex: 1,
  },
  head: {
    color: colors.red,
    marginTop: sizes.screenHeight * 0.05,
    paddingLeft: sizes.screenHeight * 0.03,
    fontWeight: '700',
    fontSize: fontSize.h4,
    alignSelf: 'center',
    paddingBottom: sizes.screenHeight * 0.03,
    fontStyle: 'italic',
  },
  content:{
    color: colors.black,
    // marginTop: sizes.screenHeight * 0.05,
    paddingLeft: sizes.screenHeight * 0.03,
    fontWeight: '700',
    fontSize: fontSize.h6,
    alignSelf: 'center',
    paddingBottom: sizes.screenHeight * 0.01,
    // fontStyle: 'italic',
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
    marginTop: sizes.screenHeight * 0.63,
    marginBottom: sizes.screenHeight * 0.01,
  },
  legends: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenHeight * 0.15,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02,
  },
});
