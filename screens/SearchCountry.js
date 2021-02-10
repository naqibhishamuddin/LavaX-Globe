import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Loading from '../components/Loading';
import Message from '../components/Message';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useQuery, gql} from '@apollo/client';
import Modal from 'react-native-modal';

const COUNTRY_QUERY = gql`
  query Country($countryCode: ID!) {
    country(code: $countryCode) {
      name
      native
      capital
      emoji
      currency
      continent {
        code
        name
      }
      phone
      languages {
        code
        name
      }
    }
  }
`;

const SearchCountry = ({route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [continentName, setContinentName] = useState(null);
  const [language, setLanguage] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const {data, loading} = useQuery(COUNTRY_QUERY, {
    variables: {countryCode: route.params.searchCode},
  });
  if (loading) {
    return <Loading />;
  }

  if (!loading && data.country == null) {
    return <Message />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={modalVisible}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        useNativeDriver={true}
        useNativeDriverForBackdrop={true}
        style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalInner}>
            <View style={styles.modalFlagSection}>
              <Text style={styles.modalEmoji}>{selectedItems.emoji}</Text>
              <Text style={styles.modalCountry}>{selectedItems.name}</Text>
            </View>
            <View style={styles.modalDescriptionSection}>
              <View style={styles.leftSection}>
                <Text style={styles.modalTitle}>Native</Text>
                <Text style={styles.modalSubheader}>
                  {selectedItems.native}
                </Text>

                <Text style={styles.modalTitle}>Capital</Text>
                <Text style={styles.modalSubheader}>
                  {selectedItems.capital}
                </Text>
                <Text style={styles.modalTitle}>Currency</Text>
                <Text style={styles.modalSubheader}>
                  {selectedItems.currency}
                </Text>
              </View>
              <View style={styles.rightSection}>
                <Text style={styles.modalTitle}>Continent</Text>
                <Text style={styles.modalSubheader}>{continentName}</Text>
                <Text style={styles.modalTitle}>Phone</Text>
                <Text style={styles.modalSubheader}>{selectedItems.phone}</Text>
                <Text style={styles.modalTitle}>Language</Text>
                <Text style={styles.modalSubheader}>{language}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.inner}>
        <Text style={styles.title}>Search Result</Text>
        <TouchableOpacity
          style={styles.countryList}
          onPress={() => {
            setContinentName(data.country.continent.name);
            setLanguage(data.country.languages[0].name);
            setSelectedItems(data.country);
            setModalVisible(true);
          }}>
          <View style={styles.flagSection}>
            <Text style={styles.emoji}>{data.country.emoji}</Text>
          </View>
          <View style={styles.countryDetailSection}>
            <Text>{data.country.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    width: wp('100%'),
    height: hp('60%'),
    backgroundColor: 'white',
    borderRadius: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: 'white',
    margin: '10%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0f0f0f',
  },
  countryList: {
    marginTop: hp('10%'),
    width: wp('80%'),
    height: hp('10%'),
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
  },

  flagSection: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryDetailSection: {
    width: '75%',
    justifyContent: 'center',
  },

  emoji: {
    fontSize: 35,
  },
  modalInner: {
    flex: 1,
    backgroundColor: 'white',
    margin: '10%',
  },
  modalFlagSection: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalDescriptionSection: {
    height: '60%',
    flexDirection: 'row',
  },
  modalEmoji: {
    fontSize: 80,
    marginTop: '-20%',
  },
  modalCountry: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  leftSection: {
    width: '55%',
    justifyContent: 'center',
  },
  rightSection: {
    width: '45%',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 12,
    color: 'gray',
  },
  modalSubheader: {
    marginTop: '5%',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '10%',
  },
});

export default SearchCountry;
