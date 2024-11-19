import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import LogoutComponent from "@/components/LogoutComponent";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="settings-outline" size={24} color="white" />
        <Text style={styles.headerText}>Settings</Text>
      </View>

      {/* Content Card */}
      <View style={styles.card}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Ionicons name="person-outline" size={32} color="#666" />
          </View>
          <Text style={styles.userName}>John Doe</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Account Settings Section */}
        <Text style={styles.sectionTitle}>Account Settings</Text>

        {/* Menu Items */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="share-outline" size={20} color="#333" />
          <Text style={styles.menuText}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="bookmark-outline" size={20} color="#333" />
          <Text style={styles.menuText}>Saved posts</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#666" style={styles.chevron} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="eye-outline" size={20} color="#333" />
          <Text style={styles.menuText}>View your listings</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#666" style={styles.chevron} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="lock-closed-outline" size={20} color="#333" />
          <Text style={styles.menuText}>Change password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={LogoutComponent}>
        <Ionicons name="log-out-outline" size={20} color="#333" />
        <Text style={styles.menuText}>Log out</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#159636',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 48,
    gap: 8,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  chevron: {
    marginLeft: 'auto',
  },
});
