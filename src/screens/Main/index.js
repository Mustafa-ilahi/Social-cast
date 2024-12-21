import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {images} from '../../services/utilities/images';
import {sizes} from '../../services';
import Button from '../../components/Button';

export default function Main({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.mainBg} style={styles.mainBg}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Image source={images.logo} style={styles.logo} />
          <Image source={images.platformText} style={styles.platformText} />
          <View style={styles.btnTop}>
            <Button title={'CONTINUE WITH GOOGLE'} />
          </View>
          <Button title={'CONTINUE WITH EMAIL'} onPress={()=>navigation.navigate("Signup")}/>

          <Image source={images.legends} style={styles.legends} />

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PRIVACY POLICIES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>USERS AGREEMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>WEBSITE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>CONTACT US</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mainBg: {height: sizes.screenHeight, width: sizes.screenWidth},
  logo: {
    height: sizes.screenHeight * 0.3,
    width: sizes.screenHeight * 0.3,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02,
  },
  platformText: {
    height: sizes.screenHeight * 0.21,
    width: sizes.screenHeight * 0.36,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02,
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
    marginTop: sizes.screenHeight * 0.03,
  },
  btnContainer: {
    flexDirection: 'row', // Align the buttons horizontally
    justifyContent: 'space-between', // Add space between buttons
    padding: 10, // Add padding outside the container
  },
  button: {
    // paddingHorizontal: 10,      // Add padding around each button text
  },
  buttonText: {
    color: 'red',
    fontSize: 11,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
