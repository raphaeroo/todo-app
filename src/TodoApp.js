import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';

import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(rootReducer, devToolsEnhancer({realtime: true}));


export default class TodoApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <TodoForm />
                    <TodoList />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
})