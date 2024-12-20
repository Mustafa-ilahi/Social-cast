import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, fontSize, sizes} from '../../services';

export default function Button({title, onPress, red, italic}) {
  return (
    <TouchableOpacity
      style={red ? styles.redBtn : styles.btn}
      onPress={onPress}>
      <Text
        style={[
          styles.btnText,
          {fontStyle: red || italic ? 'italic' : 'normal', fontWeight: '700'},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.disabledBg,
    padding: sizes.screenHeight * 0.01,
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: sizes.screenWidth * 0.03,
  },
  redBtn: {
    backgroundColor: colors.red,
    padding: sizes.screenHeight * 0.01,
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: sizes.screenWidth * 0.03,
  },
  btnText: {
    color: colors.black,
    fontSize: fontSize.h6,
  },
});
