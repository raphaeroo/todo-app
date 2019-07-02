import React from 'react';
import { StyleSheet, View } from 'react-native';

import {connect} from 'react-redux';
import TodoListItem from './TodoListItem';
import {toggleTodo} from '../actions';

const TodoList = ({ todos, dispatchToggleTodo }) => (    
        <View style={styles.container}>
            {todos.map(todo => 
            (<TodoListItem 
                key={todo.id} 
                todo={todo}
                onPressTodo={ () => dispatchToggleTodo(todo.id) }
                />
            ))}
        </View>    
);

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    }
})

const mapStateToProps = state => {
    const {todos} = state;
    return {todos};
}

export default connect(
    mapStateToProps, 
    { dispatchToggleTodo: toggleTodo } )
    (TodoList);