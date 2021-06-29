import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/Header";
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodos';
// import SandBox from './components/SandBox';

export default function App() {

  console.log("App Startted!!!");
  const [todos, setTodos] = useState([
    { text: "buy a coffe..", key: '1' },
    { text: "create an app", key: '2' },
    { text: "play on the switch", key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {

    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {
            text: text,
            key: Math.random().toString()
          }, ...prevTodos
        ];
      })


    } else {
      Alert.alert("Oppps!", "ToDO's must be 3 Char long", [
        { text: "UnderStood", onPress: () => console.log("alert closed") }
      ])
    }

  }

  return (
    // <SandBox />
    <TouchableWithoutFeedback onPress={() => {
      console.log("dismissed KeyBoard")
      Keyboard.dismiss()
    }}
    >
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,

    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,

  }
});
