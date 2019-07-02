import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ onChangeText, value }) => (
	<TextInput
		style={styles.input}
		onChangeText={onChangeText}
		value={value}
		underlineColorAndroid="#000" />
);

const styles = StyleSheet.create({
	input: {
		paddingLeft: 15,
        paddingBottom: 15,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
	}
});

export default Input;