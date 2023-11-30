import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ScrollViewCard() {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
        <View style={[styles.mainCard, styles.cardP1]}>
          <Text>No.1</Text>
        </View>
        <View style={[styles.mainCard, styles.cardP1]}>
          <Text>No.1</Text>
        </View>
        <View style={[styles.mainCard, styles.cardP1]}>
          <Text>No.1</Text>
        </View>
        <View style={[styles.mainCard, styles.cardP1]}>
          <Text>No.1</Text>
        </View>
        <View style={[styles.mainCard, styles.cardP1]}>
          <Text>No.1</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 1,
    flex: 1,
    flexDirection: 'row',
  },
  mainCard: {
    height: 100,
    width: 100,
    flex: 1,
    marginVertical: 6,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    shadowOffset:{
        width:5,
        height:5,
    },
    shadowColor:'white',
},
  cardP1: {
    backgroundColor: 'blue',
  },
});
