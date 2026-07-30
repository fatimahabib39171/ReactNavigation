import {StyleSheet, Text, View, Button} from "react-native"
import React from "react"

export default function ScreenA( {navigation}:any) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Screen A</Text>
            <Button
                title="Go to Screen B"
                color="green"
                onPress={() => navigation.navigate("Screen B")}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    }
});