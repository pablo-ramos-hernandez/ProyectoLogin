import { StyleSheet, View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';

function QR(){

    return (
        <View style={styles.CentrarcodigoQR}>
            <View>
                <QRCode value="https://github.com/pablo-ramos-hernandez" />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    CentrarcodigoQR: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})
export default QR