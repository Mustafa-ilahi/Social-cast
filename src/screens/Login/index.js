import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors, fontSize, sizes} from '../../services';
import {images} from '../../services/utilities/images';
import Button from '../../components/Button';
import Modal from 'react-native-modal';

export default function Login({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.linkText}>CLICK HERE</Text>
          </TouchableOpacity>
        </Text>
      </View>

      <View style={styles.btnTop}>
        <Button
          title={'LOG IN WITH GOOGLE'}
          italic={true}
          onPress={toggleModal}
        />
      </View>
      <Button
        title={'CREATE NEW ACCOUNT'}
        italic={true}
        onPress={() => navigation.navigate('Signup')}
      />

      <Image source={images.legends} style={styles.legends} />

      <Modal isVisible={isModalVisible}>
        <ImageBackground source={images.loginModal} style={styles.modalBgImg}>
          <Text style={styles.modalText}>
            SORRY YOUR ACCOUNT HAS BEEN BLOCKED PERMANENTLY PLEASE CONTACT US AT
            SUPPORT@SOCIALCAST.LIVE TO REQUEST A REVIEW!
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.closeButton]}
              onPress={toggleModal}>
              <Text style={styles.buttonText}>OK CLOSE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={toggleModal}>
              <Text style={styles.buttonText}>LEARN MORE</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Modal>
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

  modalBgImg: {
    // height: sizes.screenHeight * 0.15,
    overflow: 'hidden',
    borderRadius: sizes.screenWidth * 0.05,
  },

  modalText: {
    padding: sizes.screenHeight * 0.03,
    textAlign: 'center',
    color: colors.black,
    fontWeight: '700',
    fontSize: fontSize.small,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: sizes.screenHeight * 0.02,
  },
  button: {
    width: '35%',
    height: 30,
    borderRadius: sizes.screenHeight * 0.015,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  closeButton: {
    backgroundColor: colors.disabledBg,
    right: sizes.screenWidth * 0.01,
  },
  saveButton: {
    backgroundColor: colors.disabledBg, // Bright green for Save button
    left: sizes.screenWidth * 0.01,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
});
