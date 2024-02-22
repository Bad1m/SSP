import { Button, Text, View, StyleSheet } from "react-native";

const StartScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Первый экран</Text>
      <View style={styles.button_view}>
        <Button
          title="Перейти на второй экран"
          onPress={() => navigation.navigate("Second")}
        />
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  button_view: {
    padding: "25%", 
    paddingTop: "0%",
  },
  text: {
    fontSize: "20px",
    textAlign: "center",
    margin: "5%",
  },
});