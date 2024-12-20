import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, fontSize, sizes} from '../../services';
import {images} from '../../services/utilities/images';
import Button from '../../components/Button';

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity>
          <Image source={images.arrowBack} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.head}>FORGOT PASSWORD?</Text>
      </View>
      <Text style={styles.content}>
        Let’s help you get back into your account{' '}
      </Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="ENTER YOUR EMAIL OR USERNAME"
          style={styles.input}
          placeholderTextColor={colors.black}
        />
      </View>
      <View style={styles.btnTop}>
        <Button title={'SEND OTP'} italic={true} />
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.greenBg, // Adjust to match your background color
    paddingHorizontal: sizes.screenWidth * 0.05,
    paddingVertical: sizes.screenHeight * 0.02,
  },
  icon: {
    width: sizes.screenWidth * 0.05,
    height: sizes.screenWidth * 0.05,
    resizeMode: 'contain',
  },
  head: {
    color: colors.black,
    fontWeight: '700',
    fontSize: fontSize.h4,
    fontStyle: 'italic',
    marginLeft: sizes.screenWidth * 0.1, // Space between the icon and text
  },

  content: {
    color: colors.black,
    // marginTop: sizes.screenHeight * 0.05,
    // paddingLeft: sizes.screenHeight * 0.03,
    fontWeight: '700',
    fontSize: fontSize.h6,
    alignSelf: 'center',
    paddingBottom: sizes.screenHeight * 0.01,
    // fontStyle: 'italic',
  },
  btnTop: {
    marginTop: sizes.screenHeight * 0.6,
    marginBottom: sizes.screenHeight * 0.01,
  },
  legends: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenHeight * 0.15,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02,
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
});
