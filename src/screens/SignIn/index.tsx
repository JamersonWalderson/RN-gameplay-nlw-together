import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { style } from "./style";

export function SignIn() {
  const [text, setText] = useState('');
  return (
    <View style={style.container}>
      <Text>Bem vindo ao APP</Text>

      <TextInput style={style.input} onChangeText={setText} value={text} />
      <Text>
        Voce digitou: ... {text}
      </Text>
    </View>
  );
}