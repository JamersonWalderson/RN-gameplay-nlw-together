import React from "react";
import { 
  Image,
  View,
  Text,
  StatusBar,
} from "react-native";

import IllustrationImg from '../../assets/illustration.png';
import { style } from "./style";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {

  
  return (
    <View style={style.container}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Image 
        source={IllustrationImg}
        style={style.image}
        resizeMode="stretch"
      />

      <View style={style.content}>
        <Text style={style.title}>
          Organize {`\n`}
          Suas jogatinas {`\n`}
          Facilmente {`\n`}
        </Text>
        
        <Text style={style.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos {`\n`}
        </Text>
        <ButtonIcon title="Entrar com Discord" />
      </View>
    </View>
  );
}