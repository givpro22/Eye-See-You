import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const mockMenu = [
  { id: '1', name: '아메리카노', price: '2,500원' },
  { id: '2', name: '카페라떼', price: '3,000원' },
  { id: '3', name: '얼그레이 티', price: '2,800원' },
];

const AllMenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>전체메뉴</Text>
      <FlatList
        data={mockMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuText}>{item.name}</Text>
            <Text style={styles.priceText}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AllMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  priceText: {
    fontSize: 16,
    color: '#666',
  },
});
