import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'}
  ]);

    const pressHandler = (key) =>{
      setTodos((prevTodos) =>{
       return prevTodos.filter(todo => todo.key !=key);
      });
    }
     const submitHandler = (text) =>{

     if(text.length > 3){
      setTodos((prevTodos) => {
        setTodos((prevTodos) => {
          return [
            {text:text, key: Math.random().toString() },
            ...prevTodos
          ];
        })
      })
      //Alert to notify the user to atleast put in four characaters to store the data
     }else {
       Alert.alert('OOPS!', 'The Todos must be over 3 chararcters', [
        {text: 'OK', onPress: () => console.log('alert closed')}
       ]);
     }

      setTodos((setTodos) => {
        return [
          { text:text, key: matchMedia.random().toString() },
          ...prevTodos
        ]
      })

     }
 
   return (
    <TouchableWithoutFeedback onPress= {() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
     }}>
      <View style= {styles.container}>
      <Header/>
     {/*header*/}

      <View style= {styles.content}>
      <AddTodo submitHandler={submitHandler}/>
        {/* to form */}

        <View style= {styles.list}>

          <FlatList>
            data={todos}
            renderItem={() =>(
             <TodoItem item= {item} pressHandler={pressHandler}/>
            )}
          </FlatList>

        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
    padding: 40,
    backgroundColor: 'pink',
    flex: 1
    
  },
  list: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'yellow'
  }
  
});
