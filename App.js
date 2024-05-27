import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Manoj Backers</Text>
      <Text style={styles.text}>Hi Manoj</Text>
      <Text style={styles.text}>Welcome Back</Text>
      <TextInput placeholder="Search"></TextInput>
      <Image
        source={{ uri: "assets:/search.png" }}
        style={{ width: 40, height: 40 }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  red: {
    color: "red",
  },
});
