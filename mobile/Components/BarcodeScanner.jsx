import React, { useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BarcodeScannerComponent = ({
    handleBarCodeScanned,
    isCameraOpen,
    setIsCameraOpen,
}) => {
    console.log(handleBarCodeScanned, isCameraOpen, setIsCameraOpen);
    return (
        <View>
            {isCameraOpen ? (
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned}
                    style={{ flex: 1 }}
                />
            ) : null}
            <TouchableOpacity
                onPress={() => setIsCameraOpen(!isCameraOpen)}
                style={styles.closeButton}
            >
                <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    closeButton: {
        position: "absolute",
        right: 20,
        top: 40,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default BarcodeScannerComponent;
