import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function ProductCardView() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'data:image/jpeg;base64,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' }} style={styles.image} />
      <Text style={styles.title}>Jeans</Text>
      <Text style={styles.price}>2500 /=</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
