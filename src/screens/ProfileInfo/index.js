import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {colors, fontSize, sizes} from '../../services';
import Button from '../../components/Button';
import {images} from '../../services/utilities/images';
import {launchImageLibrary} from 'react-native-image-picker';
export default function ProfileInfo({navigation}) {
  const [imageUri, setImageUri] = useState('');

  // const imageGalleryLaunch = () => {
  //   let options = {
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  // };
  // launchImageLibrary(options, res => {
  //   console.log('Response = ', res);
  //   if (res.didCancel) {
  //     console.log('User cancelled image picker');
  //   } else if (res.error) {
  //     console.log('ImagePicker Error: ', res.error);
  //   } else if (res.customButton) {
  //     console.log('User tapped custom button: ', res.customButton);
  //     alert(res.customButton);
  //   } else {
  //     const source = {uri: res.uri};
  //     setImageUri(res.assets[0].uri);
  //   }
  // });
  // };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>PROFILE ONBOARDING</Text>

        <View style={styles.uploadContainer}>
          <Text style={styles.label}>UPLOAD PROFILE PICTURE</Text>
          <View style={styles.circle}>
            <TouchableOpacity
              style={styles.addButton}
              // onPress={imageGalleryLaunch}
              >
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.uploadContainer}>
          <Text style={styles.label}>UPLOAD COVER PICTURE</Text>
          <View style={styles.rectangle}>
            <TouchableOpacity style={styles.addButtonCover}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => navigation.navigate('ProfileOnboarding')}>
          <Text style={styles.label}>ENTER PROFILE BIO</Text>
          <TextInput
            style={styles.input}
            placeholder="TYPE IN YOUR PROFILE BIO HERE"
            placeholderTextColor="#8A8A8A"
          />
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>SELECT YOUR RELATIONSHIP STATUS</Text>
          <TouchableOpacity style={styles.dropdown}>
            <View style={styles.row}>
              <Text style={styles.dropdownText}>
                SELECT RELATIONSHIP STATUS
              </Text>
              <Image
                source={images.dropdownIcon}
                style={styles.dropdownIcon}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btnTop}>
          <Button
            title={'COMPLETE PROFILE SET-UP'}
            italic={true}
            //   onPress={() => navigation.navigate('Signup')}
          />

          <Image source={images.legends} style={styles.legends} />
        </View>
      </View>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greenBg,
    alignItems: 'center',
    padding: 20,
  },
  header: {
    color: colors.red,
    paddingLeft: sizes.screenHeight * 0.03,
    fontWeight: '700',
    fontSize: fontSize.h4,
    alignSelf: 'center',
    paddingBottom: sizes.screenHeight * 0.01,
    fontStyle: 'italic',
  },
  uploadContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    padding: 20,
  },
  label: {
    fontSize: fontSize.h6,
    fontWeight: '700',
    marginBottom: 10,
    color: colors.black,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  circle: {
    width: sizes.screenHeight * 0.15,
    height: sizes.screenHeight * 0.15,
    borderRadius: sizes.screenWidth * 0.5,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.12,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: sizes.screenHeight * 0.03,
  },

  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: sizes.screenWidth * 0.25,
    top: sizes.screenHeight * 0.1,
  },
  addButtonCover: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: sizes.screenHeight * 0.11,
    left: sizes.screenWidth * 0.7,
  },
  plus: {
    fontSize: fontSize.h1,
    color: '#000',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    padding: sizes.screenHeight * 0.02,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: colors.greenBg,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: colors.greenBg,
  },
  dropdownText: {
    color: colors.black,
    textAlign: 'center',
    fontSize: fontSize.h6,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  completeButton: {
    width: '80%',
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnTop: {
    // marginTop: sizes.screenHeight * 0.1,
    // marginBottom: sizes.screenHeight * 0.01,
  },
  legends: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenHeight * 0.15,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.02,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownIcon: {
    height: 20,
    width: 20,
    left: sizes.screenWidth * 0.02,
  },
});
