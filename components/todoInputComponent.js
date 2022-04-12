import React, { useState } from 'react'
import { Text, View, TextInput, Button, StyleSheet, Modal } from 'react-native'
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps'

const TodoInput = ({ visible, onAddTask, onCancel }) => {
  const [enteredTask, setEnteredTask] = useState('')
  const taskInputHandler = (enteredText) => {
    setEnteredTask(enteredText)
  }
  return (
    <>
      <Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="New task"
            style={styles.input}
            onChangeText={taskInputHandler}
            value={enteredTask}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="CANCEL" color="red" onPress={onCancel} />
            </View>
            <View style={styles.button}>
              <Button
                title="ADD"
                color="green"
                onPress={() => {
                  onAddTask(enteredTask)
                  setEnteredTask('')
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}
export default TodoInput
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
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
