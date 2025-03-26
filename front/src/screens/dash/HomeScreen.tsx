import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { navigate } from '../../navigation/NavigationUtils';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eye See You</Text>
      <Text style={styles.subtitle}>편함을 주문해보세요</Text>

      <TouchableOpacity
        style={styles.bigButton}
        onPress={() => navigate('AllMenuScreen')}
      >
        <Ionicons name="fast-food" size={32} color="#fff" />
        <Text style={styles.bigButtonText}>전체메뉴</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.smallButton}
        onPress={() => navigate('AllMenuScreen')}
      >
        <Ionicons name="star" size={24} color="#B49FD5" />
        <Text style={styles.smallButtonText}>인기메뉴</Text>
      </TouchableOpacity>

      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.voiceButton}>
          <Ionicons name="mic" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.staffButton}>
          <Text style={styles.staffText}>직원 호출</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      padding: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 50,
      color: '#333',
    },
    subtitle: {
      fontSize: 16,
      color: '#888',
      marginBottom: 30,
    },
    bigButton: {
      backgroundColor: '#B49FD5',
      width: '90%',
      padding: 80,
      borderRadius: 20,
      alignItems: 'center',
      marginBottom: 20,
      elevation: 4,
      shadowColor: '#999',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    bigButtonText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#fff',
      marginTop: 8,
    },
    smallButton: {
      backgroundColor: '#F5F5F5',
      width: '90%',
      padding: 80,
      borderRadius: 20,
      alignItems: 'center',
      marginBottom: 40,
      elevation: 2,
      shadowColor: '#bbb',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    smallButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#555',
      marginTop: 6,
    },
    bottomButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
    },
    voiceButton: {
      flex: 1,
      backgroundColor: '#B49FD5',
      padding: 14,
      borderRadius: 12,
      marginRight: 10,
      alignItems: 'center',
    },
    staffButton: {
      flex: 1,
      backgroundColor: '#B49FD5',
      padding: 14,
      borderRadius: 12,
      marginLeft: 10,
      alignItems: 'center',
    },
    staffText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  