import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { useState, useEffect } from "react";

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
        uri: "/Users/h.aburesha/react-native-app-FP/mobile/assets/paprika.png",
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <Text style={styles.text}>Fitness App</Text>
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
        backgroundColor: "#000000c0",
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
