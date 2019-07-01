import React, {Component} from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Inputer from './Input';

export default class TodoForm extends Component {
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
        console.log(this.state.text);
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