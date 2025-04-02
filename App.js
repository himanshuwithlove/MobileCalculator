import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function App() {
  const [rate, setRate] = useState("");
  const [weight, setWeight] = useState("");
  const [cost, setCost] = useState(null);

  const calculateCost = () => {
    setCost(parseFloat(rate) * parseFloat(weight));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter Rate:</Text>
      <TextInput
        keyboardType="numeric"
        value={rate}
        onChangeText={setRate}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Text>Enter Weight:</Text>
      <TextInput
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Button title="Calculate Cost" onPress={calculateCost} />
      {cost !== null && <Text>Cost: {cost}</Text>}
    </View>
  );
               }
