import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Title = () => {
    return ( 
        <Text style={styles.title}>Oponent's Guess</Text>
     );
}
const styles = StyleSheet.create({
title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderColor: 'white',
    borderWidth: 2,
    padding: 12,

}
})
 
export default Title;