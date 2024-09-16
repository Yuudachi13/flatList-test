import { View, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Add({ add }) {
  const [name, setName] = useState("");
  

  const save = () => {
    add(name);
    setName("");
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.form}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Item name..."
      />
      <Button title="Save" onPress={() => save(name)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Keskittää Buttonin ja TextInputin pystysuunnassa
    marginBottom: 16,
    paddingHorizontal: 16, // Lisää tilaa vasemmalle ja oikealle puolelle
    marginTop: 40, // Lisää tilaa ylhäälle
  }, //yrittää muistaa mitä mikäkin tekee
  form: {
    flex: 1, // Tämä antaa TextInputille enemmän tilaa
    marginRight: 20, // Lisää hieman tilaa TextInputin ja Buttonin väliin
    padding: 12, // Lisää tilaa TextInputin sisälle
    borderWidth: 0.5, // Voit lisätä reunuksen, jos haluat, että kenttä näkyy selkeämmin
    borderColor: "#ccc", // Reunuksen väri
    borderRadius: 4, // Pyöristää reunuksia
  },
});