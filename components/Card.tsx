import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Card({ title, description, image, onPress }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        {/* Displaying the image */}
        <Image source={image} style={styles.image} resizeMode="cover" />
        <TouchableOpacity style={styles.likeButton} onPress={toggleLike}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={24}
            color={liked ? "green" : "#BDBDBD"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    shadowColor: "#000", // Shadow color
    shadowOpacity: 0.5,  // Shadow transparency
    shadowRadius: 4,     // How blurry the shadow is
    shadowOffset: { width: 0, height: 6 }, // Shift the shadow down only
    elevation: 4,
    marginBottom: 20,
    marginVertical: 8,
    padding: 16,
    width: "90%",
    alignSelf: "center",
  },
  imageContainer: {
    borderRadius: 10,
    height: 150,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  likeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    padding: 5,
  },
  cardContent: {
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#777",
  },
});