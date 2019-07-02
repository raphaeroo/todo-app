import React, {Component} from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Inputer from './Input';

import {connect} from 'react-redux';
import { addTodo, setTodoText } from '../actions';

class TodoForm extends Component {
    onChangeText(text) {
        this.props.dispatchSetTodoText(text);       
    }

    onPress(){
        const { text } = this.props.todo;
        this.props.dispatchAddTodo(text);        
    }

    render(){
        const { text } = this.props.todo;
        return(
            <View style={styles.container}>
                <View style={styles.input}>
                   <Inputer                        
                       onChangeText = { text => this.onChangeText(text) }
                       value = { text }
                   />
                </View>
                <View style={styles.button}>
                    <Button 
                        title="ADD"
                        onPress={() => this.onPress()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        marginBottom: 10,
        paddingBottom: 15,
    },
    input: {
        flex: 4,
        height: 200,
    },
    button: {
        flex: 1,
        height: 200
    }
});

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}

// Curryng
export default connect(
    mapStateToProps, {
        dispatchAddTodo: addTodo,
        dispatchSetTodoText: setTodoText
    }   
    )(TodoForm);