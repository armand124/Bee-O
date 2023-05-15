import { Text, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { IconButton, Colors } from 'react-native-paper';
import TitleLogo from '../../assets/title.svg';
import {Card} from 'react-native-paper';
import Lung_Img from '../../assets/lungs.svg';
function Lungs() {
    return (
        <View>
            <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle"/>
    <Card.Content>
      <Title>Card title</Title>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
        </View>
    );
}

export default function Home({navigation}) {
    return (
            <View>
                <TitleLogo style={{
                alignSelf:'center',
                justifyContent:'center',
             }} width={200} height={200}>
                <IconButton icon = 'arrow-u-left-top-bold' 
                        mode='contained' onPress={()=>navigation.navigate("Intro")}/>
             </TitleLogo>
             <Lungs/>
            </View>
    );
}
