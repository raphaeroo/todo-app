import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const TodoListItem = ({ todo, onPressTodo }) => (           
        <TouchableOpacity onPress={onPressTodo}>
            <View style={style.line}>                
                <Text style={[
                    style.lineText,
                    todo.done ? style.lineThrough : null
                    ]}>
                    { todo.text }
                </Text>
            </View>
        </TouchableOpacity>
);

const style = StyleSheet.create({
        line: {
           height: 60,
           borderBottomWidth: 1,
           borderBottomColor: '#ccc',
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'center',                             
       },
       lineText: {           
           fontSize: 20,
           paddingLeft: 10,
           paddingRight: 10,
           textTransform: 'capitalize',           
           flex: 7,
       },
       lineThrough:{
            textDecorationLine: 'line-through',
       },
       avatar: {
           aspectRatio: 1,                      
           flex: 1,
           marginLeft: 15,           
           borderRadius: 20,

       }
});
export default TodoListItem;