import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Message = () => {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        source={require('../assets/404.json')}
        autoPlay
        loop={false}
      />
      <Text style={styles.header}>Oooooops!</Text>
      <Text style={styles.description}>
        No country found based on your search query. Please try again.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontWeight: 'bold',
    color: '#0f0f0f',
    fontSize: 20,
    marginTop: hp('3%'),
  },
  animation: {
    width: wp('35%'),
    height: hp('35%'),
  },

  description: {
    marginTop: hp('3%'),
    color: 'gray',
    lineHeight: 23,
    textAlign: 'center',
    marginHorizontal: wp('15%'),
    fontSize: 12,
    marginBottom: '25%',
  },
});

export default Message;
