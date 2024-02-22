import { Button, Text, View, StyleSheet } from "react-native";

const SecondScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Вторая страница</Text>
      <View style={styles.buttons_view}>
        <View style={styles.button_wrapper}>
          <Button
            title="Назад"
            onPress={() => navigation.navigate("Start")}
          />
        </View>
        <View>
          <Button
            title="Перейти на третий экран"
            onPress={() => navigation.navigate("Third")}
          />
        </View>
      </View>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  buttons_view: {
    padding: "25%", 
    paddingTop: "0%",
  },
  button_wrapper: {
    marginBottom: "5%",
  },
  text: {
    fontSize: "20px",
    textAlign: "center",
    margin: "5%",
  },
});