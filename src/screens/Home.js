import { ImageBase, View } from 'react-native';
import {Text} from 'react-native-paper';
import { Button, DefaultTheme, Paragraph, Title } from 'react-native-paper';
import { IconButton, Colors , Card} from 'react-native-paper';
import TitleLogo from '../../assets/title.svg';
import Lung_Img from '../../assets/lungs.svg';
import { Avatar } from 'react-native-paper';
import Animatiodan from '../../assets/animation'
import NavBar from '../../components/navigation_bar'
export default function Home({navigation}) {
    return (
            <View>
                <TitleLogo style={{
                alignSelf:'center',
                justifyContent:'center',
             }} width={200} height={170}>
                <IconButton icon = 'arrow-u-left-top-bold' 
                        mode='contained' onPress={()=>navigation.navigate("Intro")}/>
             </TitleLogo>
             <NavBar/>
            </View>
    );
}
