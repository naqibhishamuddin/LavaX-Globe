import React, {PureComponent} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

export default class Loading extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'#0f0f0f'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
