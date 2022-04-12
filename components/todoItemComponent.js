import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const TodoItem = ({ taskItem, index, onToggleFinish, onDelete }) => {
  return (
    <>
      <TouchableOpacity
        key={taskItem.id}
        onPress={() => onToggleFinish(taskItem.id)}
        onLongPress={() => onDelete(taskItem.id)}
      >
        <View
          style={[
            styles.listItem,
            { backgroundColor: taskItem.finished ? '#afa' : '#ccc' },
          ]}
        >
          <Text>{taskItem.description}</Text>
        </View>
      </TouchableOpacity>
      <Text>{'\n'}</Text>
    </>
  )
}
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
})
export default TodoItem
