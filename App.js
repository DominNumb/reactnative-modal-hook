import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import TodoItem from './components/todoItemComponent'
import TodoInput from './components/todoInputComponent'
import * as Device from 'expo-device'

export default function App() {
  const [inputTextValue, setInputTextValue] = useState('')
  const [isAddMode, setIsAddMode] = useState(false)
  const [taskArray, setTaskArray] = useState([])
  const myDeviceName = Device.deviceName
  const handleInputText = (enteredText) => {
    if (enteredText.length < 1) {
      console.log('[' + myDeviceName + '] nic nenapsal do tasku')
      return
    }
    const lastItem = [...taskArray].pop() //pop vezme poslední array, ale taky ho hned smaže, proto jsou tam tečky na kopirovani aby nedošlo ke mutaci hlavniho arraye
    var task = {
      id: typeof lastItem !== 'undefined' ? lastItem.id + 1 : 1, //typeof je tam kvuli undefiend, jinak nejde zobrazit. Znamena to že pokud to neni undefiend(neni to prazdny array), tak to proste pričtě k poslednimu id 1 a je to nove id. Pokud ten array je prazdny, dosadí se 1
      description: enteredText,
      finished: false,
    }
    setTaskArray((old) => [...old, task])
    setIsAddMode(false)
  }
  const onToggleFinish = (taskId) => {
    let tmpArray = [...taskArray]
    for (var i in tmpArray) {
      if (tmpArray[i].id == taskId) {
        tmpArray[i].finished = !tmpArray[i].finished
        break
      }
    }
    setTaskArray(tmpArray)
  }
  const onDelete = (taskId) => {
    setTaskArray((taskArray) => taskArray.filter((task) => task.id != taskId))
  }
  const cancelTodoAdditionHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.container}>
      <Text>
        {taskArray.map((t, index) => (
          <TodoItem
            key={index}
            taskItem={t}
            index={index}
            onToggleFinish={onToggleFinish}
            onDelete={onDelete}
          />
        ))}
      </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
        Write new task! {'\n'}
      </Text>

      <TodoInput
        visible={isAddMode}
        onAddTask={handleInputText}
        onCancel={cancelTodoAdditionHandler}
      />

      <View style={styles.buttonStyle}>
        <Button
          title="Add New Task"
          color="white"
          onPress={() => setIsAddMode(true)}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: 'black',
    borderColor: 'black', //button background/border color
    overflow: 'hidden',
    marginBottom: 10,
  },
})
