import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {

    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
  };

  return (

    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Goal"
          style={styles.textInputContainer}
          onChangeText={inputHandler}
          value={enteredGoal}
        />
        <Button
          title="Add a Goal"
          onPress={addGoalHandler}
        />
      </View>

      <FlatList data={courseGoals} 
      renderItem={itemData => 
        <View style = {styles.finalGoals}>
          <Text>{itemData.item.value}</Text>
        </View>}/>

    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInputContainer: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 5,
    width: 185
  },
  finalGoals: {
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1
  }
});
