import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fontSize, sizes} from '../../services';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {images} from '../../services/utilities/images';
import Button from '../../components/Button';

export default function OTPVerification() {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const CELL_COUNT = 6;

  return (
    <View style={styles.container}>
      <Text style={styles.head}>OTP VERIFICATION</Text>
      <Text style={styles.content}>
        PLEASE ENTER THE ONE TIME PASSWORD SENT TO YOUR SOCIALCAST ACCOUNT
      </Text>

      <View>
        <CodeField
          ref={ref}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      <View style={styles.btnContainer}>
        <Text style={styles.text}>
          IF YOU DIDN’T RECEIVE CODE?{' '}
          <TouchableOpacity style={{}}>
            <Text style={styles.linkText}>RESEND OTP</Text>
          </TouchableOpacity>
        </Text>
      </View>

      <View style={styles.btnTop}>
        <Button title={'CONFIRM CODE'} italic={true} />
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
  codeFieldRoot: {
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.02,
    paddingHorizontal: sizes.screenWidth * 0.05,
  },
  cell: {
    width: sizes.screenWidth * 0.13,
    height: sizes.screenHeight * 0.07,
    lineHeight: sizes.screenHeight * 0.07,
    fontSize: fontSize.h6,
    fontWeight: '500',
    borderColor: colors.black,
    textAlign: 'center',
    color: colors.black,
    borderRadius: sizes.screenWidth * 0.02,
    backgroundColor: colors.greenBg,
    borderWidth: 1.3,
  },
  focusCell: {
    borderWidth: 1,
    borderColor: colors.btnPurple,
  },
  btnTop: {
    marginTop: sizes.screenHeight * 0.5,
    marginBottom: sizes.screenHeight * 0.01,
  },
  legends: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenHeight * 0.15,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02,
  },
});
