import { TextInput, View, StyleSheet, Alert } from "react-native";
import MainButton from "../components/MainButton";
import { useState } from "react";

const StartGameScreen = ({onPickNumber}) => {

    const [enteredNumber, setEnteredNumber] = useState('')

function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
}

function resetInputHandler () {
    setEnteredNumber('');
}

function confirmInputHandler() {
    const chooseNumber = parseInt(enteredNumber);

    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
Alert.alert('Invalid number!', 'Number has to be between 1 and 99' ), [{text: "Okay", styles: 'destructive', onPress: resetInputHandler}]
    }
    onPickNumber(chooseNumber)
}


  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <MainButton onPress={resetInputHandler}> Reset </MainButton>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton onPress={confirmInputHandler}> Confirm </MainButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  }
});

export default StartGameScreen;
