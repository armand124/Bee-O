import { View } from 'react-native';
import { Button,DefaultTheme,IconButton,Text } from 'react-native-paper';
export default function Home({navigation}) {
    return (
        <View>
                <Text variant='headlineLarge' theme={DefaultTheme} style={{
                    alignSelf: 'center',
                    paddingVertical: 50,
                    fontFamily: 'Arial',
                }}>Home</Text>
            </View>
    );
}