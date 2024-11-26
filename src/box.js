import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Kata = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>Teks di Tengah Layar</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor:'#d3d3d3',
  },
  centeredText: {
    fontSize: 24, 
    color: 'blue', 
    fontWeight: 'bold', 
    marginBottom: 50, 
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    width: '100%', 
    paddingHorizontal: 20,
  },
  box1: {
    width: 100, 
    height: 100, 
    backgroundColor: 'black', 
  },
  box2: {
    width: 100, 
    height: 100,
    backgroundColor: 'navy',
  },
});

export default Kata;
