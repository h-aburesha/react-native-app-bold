import { StatusBar } from "expo-status-bar";
import { Dimensions, ScrollViewComponent } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Button,
    ScrollView,
} from "react-native";
import { useState, useEffect } from "react";

import BarcodeScannerComponent from "./BarcodeScannerComponent";
import HoverMenu from "./HoverMenu";

export default function Main() {
    const navigation = useNavigation();

    const backgroundImage = {
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

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await fetch(`http://localhost:5001/data`);
    //             const data = await response.json();
    //             setText(data.data.key);
    //             console.log("Data from App after JSON:", data.data.key);
    //         } catch (error) {
    //             console.log("Error in Main.jsx:", error);
    //         }
    //     })();
    // }, []);

    return (
        <>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <HoverMenu />
                <ImageBackground
                    source={backgroundImage}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <BarcodeScannerComponent
                        isCameraOpen={isCameraOpen && !scanned}
                        setIsCameraOpen={setIsCameraOpen}
                        handleBarCodeScanned={handleBarCodeScanned}
                    />

                    <Text style={styles.text}>Bold.</Text>

                    <View style={styles.button}>
                        <Button title="Scan Code!" onPress={toggleCamera} />
                        <View style={styles.separator} />
                        <Button
                            title="Macronutrients"
                            onPress={() => navigation.navigate("PieChart")}
                        />
                    </View>
                </ImageBackground>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    image: {
        flex: 1,
        resizeMode: "cover",

        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 250,
    },

    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: "black",
        marginTop: 100,
        marginRight: 50,
        marginLeft: 50,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: "white",
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: "80%",
        alignSelf: "center",
    },
});
