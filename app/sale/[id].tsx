import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Mock data (in a real app, you'd fetch this data based on the ID)
const salesData = [
  { id: '1', title: 'Vintage Furniture Sale', image: require('@/assets/images/sale1.png'), date: '2023-06-15', time: '9:00 AM - 4:00 PM', address: '123 Main St, Anytown, USA', description: 'A wide variety of vintage furniture pieces from the 50s and 60s. Great condition and reasonable prices!' },
  { id: '2', title: 'Electronics Clearance', image: require('@/assets/images/sale2.png'), date: '2023-06-16', time: '10:00 AM - 3:00 PM', address: '456 Oak Ave, Somewhere, USA', description: 'Clearing out last year\'s models of TVs, laptops, and smartphones. All items are in perfect working condition.' },
  { id: '3', title: 'Book Lovers\' Paradise', image: require('@/assets/images/sale3.png'), date: '2023-06-17', time: '8:00 AM - 2:00 PM', address: '789 Elm St, Nowhere, USA', description: 'Thousands of books across all genres. From bestsellers to rare finds, we have something for every reader!' },
  { id: '4', title: 'Kids\' Toys Galore', image: require('@/assets/images/sale4.png'), date: '2023-06-18', time: '9:00 AM - 1:00 PM', address: '101 Pine Rd, Everywhere, USA', description: 'Huge selection of gently used toys for all ages. Board games, action figures, dolls, and much more!' },
  { id: '5', title: 'Gardening Tools Sale', image: require('@/assets/images/sale5.png'), date: '2023-06-19', time: '7:00 AM - 12:00 PM', address: '202 Maple Ln, Anywhere, USA', description: 'Everything a gardener needs! From hand tools to power equipment, all at great prices.' },
  { id: '6', title: 'Antiques and Collectibles', image: require('@/assets/images/sale6.png'), date: '2023-06-20', time: '11:00 AM - 5:00 PM', address: '303 Cedar Blvd, Someplace, USA', description: 'A treasure trove of antiques and collectibles. Vintage jewelry, old coins, rare stamps, and more!' },
];

export default function SaleDetailScreen() {
  const { id } = useLocalSearchParams();
  const sale = salesData.find(item => item.id === id);

  if (!sale) {
    return (
      <View style={styles.container}>
        <Text>Sale not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={sale.image} style={styles.saleImage} />
      <View style={styles.content}>
        <Text style={styles.title}>{sale.title}</Text>
        <View style={styles.detailRow}>
          <Ionicons name="calendar-outline" size={20} color="#666" />
          <Text style={styles.detailText}>{sale.date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="time-outline" size={20} color="#666" />
          <Text style={styles.detailText}>{sale.time}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="location-outline" size={20} color="#666" />
          <Text style={styles.detailText}>{sale.address}</Text>
        </View>
        <Text style={styles.description}>{sale.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  saleImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginTop: 16,
    lineHeight: 24,
  },
});
