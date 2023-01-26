import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Button,
} from "react-native";
import { useState, useEffect } from "react";
import CustomButton from "./CustomButton";

export default function Main() {
    const [dogImage, setDogImage] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `https://dog.ceo/api/breeds/image/random`
            );
            const data = await response.json();
            setDogImage(data.message);

            console.log("Data from App:", data);
        })();
    }, []);

    const image = {
        uri: "https://s3.amazonaws.com/spicedling/TDDjaWLk1wRxnDTBkUH9Y-9TAstJrKGA.png",
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <Text style={styles.text}>Fitness App</Text>

                <View style={styles.button}>
                    <Button title="Press Me!" />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black",
        fontSize: 16,
    },
});
