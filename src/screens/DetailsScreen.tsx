import React from "react";
import { View, Text, Button } from "react-native";

export default function DetailsScreen(props: { navigation?: any; route?: any; }) {
  const {itemId} = props.route.params;
  const [welcomeMessage, setWelcomeMessage] = React.useState(''); 
  React.useEffect(()=> {
    const message = getMessage(itemId);
    setWelcomeMessage(message);
  },[]);

  const getMessage = (itemId: number): string => {
    let name = 'Juan';
    if(itemId%2==0){
      name ='Pedro';
    }
    return `Bienvenido ${name}`;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details Screen</Text>
      <Text>ItemId: {itemId}</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold'}}>{welcomeMessage}</Text>
      <Button title='Go Back' onPress={() => {
        props.navigation.goBack();
      }} />
    </View>
  );
}
