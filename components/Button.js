import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={props.onPress}
      activeOpacity={0.7}>
      <Text style={styles.buttonTitle}>{props.buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: '10%',
    backgroundColor: '#0f0f0f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonTitle: {
    color: 'white',
  },
});

export default Button;
