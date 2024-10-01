import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import MainButton from "../components/ui/MainButton";

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.screen}>
      <Title>The number was founded!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/gameOverImage.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone takes
        <Text style={styles.highlight}> {roundsNumber} </Text>
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber} </Text>
      </Text>
      <MainButton onPress={onStartNewGame} textStyle={styles.btnText}>Start a new game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 16,
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  summaryText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "open-sans",
    marginVertical: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  btnText: {
    fontSize: 18,
    padding: 6,
  }
});

export default GameOverScreen;
