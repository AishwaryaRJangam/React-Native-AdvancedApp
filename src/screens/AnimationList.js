import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import { Header } from '../components/common';
import LibraryList from '../components/LibraryList';

const AnimationList = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
      <Text style={styles.listhead}>Animation List</Text>
        <LibraryList />
      </View>
    </Provider>
  );
};
const styles = StyleSheet.create({
  listhead: {
    padding: 16,
    marginTop: 30,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'green',  }
});

export default AnimationList;
