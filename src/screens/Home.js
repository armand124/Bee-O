import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
  
export default function Home({navigation}) {
    return (
            <View>
            <Button icon = 'arrow-u-left-top-bold' mode='elevated' onPress={()=>navigation.navigate("Intro")}
            style={{
                alignSelf: 'flex-start',
                
            }}/>
            </View>
    );
}
