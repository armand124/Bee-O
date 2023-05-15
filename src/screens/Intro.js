import { Text, View } from 'react-native';
import { Button,IconButton } from 'react-native-paper';
import Logo from '../../assets/logo.svg';
import Start from '../../assets/start_button.svg';


export default function Intro({navigation}) {
    return (
        <View style={{flex: 1 , backgroundColor: 'white'}}>
             <Logo style={{
                alignSelf:'center',
                justifyContent:'center',
             }} width={300} height={600} />
             <IconButton icon = {Start} style={{
                alignSelf: 'center',
                width:200,
                height:80,
                backgroundColor: 'transparent'
            }}
            mode='contained' onPress={()=>navigation.navigate("Home")}/>
            </View>
            
    );
}