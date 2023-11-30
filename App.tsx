import { View, Text, SafeAreaView, ScrollView, StyleSheet, useColorScheme } from 'react-native';
import React from 'react';
import FlatCard from './Components/FlatCard';
import ScrollViewCard from './Components/ScrollViewCard';
import ProductCardView from './Components/ProductCardView';
import LinkingAndTouchableOpacity from './Components/LinkingAndTouchableOpacity';
import ArrayObjectList from './Components/ArrayObjectList';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.mainHeading}>FLAT CARDS</Text>
          <FlatCard />
          <Text style={styles.mainHeading}>SCROLL VIEW CARDS</Text>
          <ScrollViewCard/>
          <Text style={styles.mainHeading}>product View</Text>
          <ProductCardView/>
          <Text style={styles.mainHeading}>LINKING CARD</Text>
          <LinkingAndTouchableOpacity/>
          <Text style={styles.mainHeading}>Array Object List</Text>
          <ArrayObjectList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainHeading: {
    textTransform:'uppercase',
    textAlign: 'center',
    margin: 10,
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: 0.8,
  },
  bgColorDark: { backgroundColor: '#26262c' },
  bgColorLight: { backgroundColor: '#edf2f4' },
});

export default App;
