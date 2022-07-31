import { View, Button, TextInput, StyleSheet} from 'react-native'
import { useState } from "react";

function GoalInput(props){
    // const [enteredText, setEnteredText] = useState("");

    function goalInputHandler(enteredText) {
        props.setEnteredText(enteredText);
      }

    function addGoalHandler() {
        props.onAddGoal(props.enteredText);
        props.setEnteredText("");
    }
    
    return (
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="hi"
          style={styles.textInput}
          onChangeText={(text) => goalInputHandler(text)}
          value={props.enteredText}
        ></TextInput>
        <Button title="add goal" onPress={addGoalHandler}></Button>
      </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
      }
})