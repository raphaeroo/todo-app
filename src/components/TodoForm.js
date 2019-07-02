import React, {Component} from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Inputer from './Input';

import {connect} from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: ''
        }
    }
    onChangeText(text) {
        this.setState({
            text
        });
    }

    onPress(){
        this.props.dispatchAddTodo(this.state.text);
        this.setState({text: ''});
    }

    render(){
        const { text } = this.state;
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

// const mapDispatchToProps = dispatch => {
//     return {
//         dispatchAddTodo: text => dispatch(addTodo(text))
//     }
// }

// const mapDispatchToProps = {
//     dispatchAddTodo: addTodo
// }

// Curryng
export default connect(null, {
    dispatchAddTodo: addTodo
})(TodoForm);