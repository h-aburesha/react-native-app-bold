import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";

import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import BarcodeScannerComponent from "./BarcodeScannerComponent";

export default function Main() {
    const image = {
        uri: "https://s3.amazonaws.com/spicedling/sR27vECAj414KOsimdlehadjFCqzUs4p.png",
    };

    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("null");

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(
            `Bar code with type ${type} and Serial Code: ${data} has been scanned!`
        );
        console.log(data);
    };

    const toggleCamera = () => {
        if (!scanned) {
            setIsCameraOpen(!isCameraOpen);
        } else {
            setScanned(false);
            setIsCameraOpen(!isCameraOpen);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:5001/data`);
                const data = await response.json();
                setText(data.data.key);
                console.log("Data from App after JSON:", data.data.key);
            } catch (error) {
                console.log("Error in Main.jsx:", error);
            }
        })();
    }, []);

    return (
        <>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <BarcodeScannerComponent
                    style={styles.camera}
                    isCameraOpen={isCameraOpen && !scanned}
                    setIsCameraOpen={setIsCameraOpen}
                    handleBarCodeScanned={handleBarCodeScanned}
                />
                <ImageBackground
                    source={image}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <Text style={styles.text}>{text}Bold!</Text>

                    <View style={styles.button}>
                        <Button title="Scan Code!" onPress={toggleCamera} />
                    </View>
                </ImageBackground>
            </View>
        </>
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
        marginTop: 200,
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
        marginTop: 100,
    },
    camera: {
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});

/* 

    marginRight: 100,
        marginLeft: 100,
        marginTop: 100,




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

    
*/
