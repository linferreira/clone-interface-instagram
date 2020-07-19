import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, StatusBar } from 'react-native';

import Feed from './src/Feed';

import ListItem from './src/screens/listItem'

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar  backgroundColor={'#999'} barStyle="light-content" />

      <View style={styles.header}>

        <TouchableOpacity>
          <Image
            source={require('./src/img/camera.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('./src/img/logo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('./src/img/send.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={Feed}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <ListItem data={item} />}
      >

      </FlatList>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 10,
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    borderWidth: 0.2,
    shadowColor: '#555',
    elevation: 1,
  },
  icon: {
    width: 23,
    height: 23,
  }
});
