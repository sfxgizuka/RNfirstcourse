import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";
import  GoalItem  from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredText, setEnteredText] = useState("");

  

  function addGoalHandler() {
    setCourseGoals((currentGoals) => [...currentGoals, {text: enteredText, key: Math.random().toString()}]);
  }

  const deleteGoal = (id) =>{
    console.log(id)
    setCourseGoals((currentGoals)=>{
      console.log(id)
      return currentGoals.filter(goal => goal.id == id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput setEnteredText={setEnteredText} enteredText={enteredText} onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList alwaysBounceVertical={true} data={courseGoals} renderItem={(itemData) => {
          return <GoalItem onDeleteItem={deleteGoal} id={itemData.item.id} text={itemData.item.text} />
        }
       } />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }

  
});
