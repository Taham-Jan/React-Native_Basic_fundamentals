import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={[styles.cardMain, styles.cardP1]}>
          <Text>RED</Text>
        </View>
        <View style={[styles.cardMain, styles.cardP2]}>
          <Text>TEAL</Text>
        </View>
        <View style={[styles.cardMain, styles.cardP3]}>
          <Text>PURPLE</Text>
        </View>
        <View style={[styles.cardMain, styles.cardP1]}>
          <Text>RED</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    padding:1,
  },
  cardMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
    margin: 3,
    height: 100,
    width: 100,
    borderRadius:30,
  },
  cardP1: {
    backgroundColor: 'red',
  },
  cardP2: {
    backgroundColor: 'teal',
  },
  cardP3: {
    backgroundColor: 'purple',
  },
});
