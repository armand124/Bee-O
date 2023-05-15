import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Intro({navigation}) {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60%',
            textAlign: 'center',
            fontSize: 25}}>
            <Button onPress={()=>navigation.navigate("Home")}>
                Startdsada
            </Button>
        </View>
    );
}