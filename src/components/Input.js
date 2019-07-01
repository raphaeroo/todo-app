import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Inputer = ({ onChangeText, value }) => {
    return (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
    />
    );
};

const styles = StyleSheet.create({
    input: {
        paddingLeft: 15,
        paddingBottom: 15,
        borderColor: "#000",
        borderWidth: 1,
        marginLeft: 5,
    }
});

export default Inputer;