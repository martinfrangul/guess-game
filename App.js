import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true)

  

  function pickedNumberHandler(pickNumber) {
    setUserNumber(pickNumber);
    setGameOver(false);

  }
 
  const gameOverHandler = () => { 
    setGameOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen gameOverHandler={gameOverHandler} userNumber={userNumber} />;
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen />;
  
  }



  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
