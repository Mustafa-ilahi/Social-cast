import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {images} from '../../services/utilities/images';
import {colors, fontSize, sizes} from '../../services';
import Button from '../../components/Button';

export default function Signup() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.row}>
          <TouchableOpacity>
            <Image source={images.arrowBack} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.head}>GET A SOCIALCAST ACCOUNT</Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>FULLNAME</Text>
          <TextInput style={styles.input} placeholderTextColor={colors.black} />

          <Text style={styles.label}>EMAIL</Text>
          <TextInput style={styles.input} placeholderTextColor={colors.black} />

          <Text style={styles.label}>USERNAME</Text>
          <TextInput style={styles.input} placeholderTextColor={colors.black} />

          <Text style={styles.label}>SCREEN NAME</Text>
          <TextInput style={styles.input} placeholderTextColor={colors.black} />

          <Text style={styles.label}>PASSWORD</Text>
          <TextInput style={styles.input} placeholderTextColor={colors.black} />

          <Text style={styles.label}>CONFIRM PASSWORD</Text>
          <TextInput style={styles.input} placeholderTextColor={colors.black} />

          <Text style={styles.label}>BIRTHDAY</Text>
          <TextInput style={styles.input} placeholderTextColor={colors.black} />

          <Text style={styles.label}>LOCATION</Text>
          <TextInput style={styles.input} placeholderTextColor={colors.black} />
        </View>
      </View>

      <View style={styles.btnTop}>
        <Button title={'SIGN UP FREE!!'} italic={true} />
      </View>
      <View style={styles.btnContainer}>
        <Text style={styles.text}>
          ALREADY HAVE ACCOUNT?{' '}
          <TouchableOpacity style={{}}>
            <Text style={styles.linkText}>CLICK HERE</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <Image source={images.legends} style={styles.legends} />
    </ScrollView>
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
    fontSize: fontSize.h5,
    fontStyle: 'italic',
    marginLeft: sizes.screenWidth * 0.05, // Space between the icon and text
  },
  label: {
    color: colors.black,
    fontWeight: '700',
    fontSize: fontSize.h6,
    fontStyle: 'italic',
    marginLeft: sizes.screenWidth * 0.05,
    marginBottom: sizes.screenHeight * 0.01,
  },
  input: {
    backgroundColor: colors.greenBg,
    borderWidth: 1,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.04,
    padding: sizes.screenHeight * 0.01,
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.01,
  },
  inputView: {
    marginBottom: sizes.screenHeight * 0.03,
  },
  legends: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenHeight * 0.15,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.02,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:sizes.screenHeight*0.01
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
});
