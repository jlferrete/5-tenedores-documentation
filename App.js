import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Avatar } from "react-native-elements";

export default function App() {
  buttonOnClick = value => {
    console.log("Click en mi primer botón: " + value);
  };

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size='large'
        source={{
          uri: "https://api.adorable.io/avatars/285/abott@adorable.png"
        }}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Mi primer Botón"
        onPress={() => this.buttonOnClick("Hola Mundo")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
