import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
function SubheaderPablo() {
    return (

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.avatar} source={require('../../assets/fotoPablo.jpg')}></Image>
            <View style={{ padding: 10, borderRadius: 10, width: '70%' }}>
                <Text style={{ textAlign: 'left', fontWeight: '700', fontSize: 20 }}>
                    Descripcion breve sobre mi
                </Text>
                <Text>
                    Soy estudiante de segundo de DAM y hago atletismo
                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    avatar: {
        height: 90,
        width: 90,
        borderRadius: 100
    },
})
export default SubheaderPablo