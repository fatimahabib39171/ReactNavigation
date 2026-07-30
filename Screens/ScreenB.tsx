import { StyleSheet, View, Text, Button} from 'react-native';

export default function ScreenB({navigation}:any) {
    return(
        <View style={styles.container}>

            <Text style={styles.title}>
                Welcome to Screen B
                </Text>

            <Button 
                title="Go Back"
                onPress={() => navigation.goBack()}
            />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    }
});