import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import { Link, LinkProps } from 'expo-router';

const salesData = [
  { id: '1', title: 'Yard Sale 1', image: require('@/assets/images/sale1.png') },
  { id: '2', title: 'Yard Sale 2', image: require('@/assets/images/sale2.png') },
  { id: '3', title: 'Yard Sale 3', image: require('@/assets/images/sale3.png') },
  { id: '4', title: 'Yard Sale 4', image: require('@/assets/images/sale4.png') },
  { id: '5', title: 'Yard Sale 5', image: require('@/assets/images/sale5.png') },
  { id: '6', title: 'Yard Sale 6', image: require('@/assets/images/sale6.png') },
];

export default function HomeScreen() {
  const renderItem = ({ item }: { item: { id: string; title: string; image: any } }) => (
    <View style={styles.card}>
      <Link href={`/listings/${item.id}`} style={styles.link}>
        <Image source={item.image} style={styles.saleImage} />
        <Text style={styles.saleTitle}>{item.title}</Text>
      </Link>
      <Link href={`/profile/${item.id}`} style={styles.link}>
      <Text style={styles.saleTitle}>Go to Profile</Text>
      </Link>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={salesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  saleImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  saleTitle: {
    padding: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  link: {
    textDecorationLine: 'none',
  },
});
