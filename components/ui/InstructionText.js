import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({children, style}) => {
    return ( 
        <Text style={[styles.instructionText, style]}> {children} </Text>
     );
}

const styles = StyleSheet.create({
    instructionText: {
    fontFamily: 'open-sans',
      color: Colors.primary500,
      fontSize: 16,
    },
  });
  
 
export default InstructionText;