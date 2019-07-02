import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import {connect} from 'react-redux';
import TodoListItem from './TodoListItem';


const TodoList = ({ todos }) => (    
        <View style={styles.container}>
            {todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
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

export default connect(mapStateToProps)(TodoList);