import React, { useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BarcodeScannerComponent = ({
    handleBarCodeScanned,
    isCameraOpen,
    setIsCameraOpen,
}) => {
    // console.log(handleBarCodeScanned, isCameraOpen, setIsCameraOpen);

    return (
        <>
            {isCameraOpen ? (
                <>
                    <BarCodeScanner
                        onBarCodeScanned={handleBarCodeScanned}
                        style={[StyleSheet.absoluteFillObject, { zIndex: 1 }]}
                    />
                    <TouchableOpacity
                        onPress={() => setIsCameraOpen(false)}
                        style={styles.closeButton}
                    >
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </>
            ) : null}
        </>
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
        zIndex: 1,
    },
    closeButtonText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default BarcodeScannerComponent;
