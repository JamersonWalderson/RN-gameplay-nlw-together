import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DiscordImg from '../../assets/discord.png';
import { style } from './style';

interface Props extend TouchableOpacityProps {
  title: string;
}

export function ButtonIcon({ title }: Props) {
  return(
    <TouchableOpacity style={style.container} activeOpacity={0.7}>
        <View style={style.iconWrapper}>
          <Image 
            source={DiscordImg}
            style={style.icon}
          />
        </View>
        <Text style={style.title}>
          { title }
        </Text>
    </TouchableOpacity>
  );
}