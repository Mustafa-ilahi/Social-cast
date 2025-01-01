import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

const ProfileOnboarding = ({navigation}) => {
  const [bio, setBio] = useState('');

  const handleSave = () => {
    console.log('Bio Saved:', bio);
    navigation.goBack();
  };

  const handleClose = () => {
    console.log('Onboarding Closed');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>PROFILE ONBOARDING</Text>

      <View style={styles.card}>
        <Text style={styles.subtitle}>ENTER YOUR BIO BELOW</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your bio here..."
            placeholderTextColor="black"
            multiline
            value={bio}
            onChangeText={setBio}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.closeButton]}
            onPress={handleClose}>
            <Text style={styles.buttonText}>CLOSE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSave}>
            <Text style={styles.buttonText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: colors.greenBg, // Match green background from design
    // justifyContent: 'center',
    // padding: 20,
    backgroundColor: colors.greenBg,
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: colors.red,
    marginTop: sizes.screenHeight * 0.05,
    paddingLeft: sizes.screenHeight * 0.03,
    fontWeight: '700',
    fontSize: fontSize.h4,
    alignSelf: 'center',
    paddingBottom: sizes.screenHeight * 0.01,
    fontStyle: 'italic',
  },
  card: {
    width: sizes.screenWidth * 0.93,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: colors.greenBg,
    alignItems: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 5,
    width: '100%',
    fontStyle: 'italic',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: colors.greenBg,
    padding: 10,
  },
  textInput: {
    fontSize: 16,
    height: sizes.screenHeight * 0.35,
    textAlignVertical: 'top',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderTopWidth: 1,
    padding: sizes.screenHeight * 0.01,
  },
  button: {
    width: '35%',
    height: 40,
    borderRadius: sizes.screenHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  closeButton: {
    backgroundColor: '#FF0000',
  },
  saveButton: {
    backgroundColor: '#A8F0B0', // Bright green for Save button
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    fontStyle: 'italic',
  },
});

export default ProfileOnboarding;
