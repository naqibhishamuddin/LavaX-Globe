import React, {PureComponent} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import Button from '../components/Button';
import SplashScreen from 'react-native-splash-screen';

export default class Onboard extends PureComponent {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inner}>
          <>
            <Text style={styles.title}>Welcome to the</Text>
            <Text style={styles.header}>Globe.</Text>
            <Text style={styles.description}>
              Explore countries around the world with details information such
              as continent, capital, phone number and many more
            </Text>
          </>
          <Button
            buttonTitle={'Explore Now'}
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner: {
    flex: 1,
    backgroundColor: 'white',
    margin: '10%',
  },
  title: {
    color: '#474747',
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: '15%',
  },
  header: {
    color: '#0f0f0f',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: '3%',
  },
  description: {
    fontSize: 13,
    lineHeight: 25,
    marginTop: '10%',
    color: 'gray',
    marginBottom: '85%',
  },
});
