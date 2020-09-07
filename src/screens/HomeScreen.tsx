import React, { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";

export default function HomeScreen(props: { navigation: { navigate: (arg0: string, arg1: { itemId: number; }) => void; }; }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button title={'Go to Details'} onPress={() => {
        props.navigation.navigate('Details', { itemId: 46 });
      }}/>
    </View>
  );
}
