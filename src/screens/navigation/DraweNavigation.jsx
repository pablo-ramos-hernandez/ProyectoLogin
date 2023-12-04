import { DrawerContentScrollView, createDrawerNavigator } from "@react-navigation/drawer";
import Welcome from "../Welcome";
import Login from "../Login";
import React from "react";
import { Text } from "react-native"
import { StyleSheet } from 'react-native';
import MenuButtonItems from "../../components/MenuButtonItems";

const drawer = createDrawerNavigator()

export function DraweNavigation() {
    return (
        <drawer.Navigator drawerContent={(props) => <MenuItems {...props} />} >
            <drawer.Screen name="Welcome" component={Welcome} />
            <drawer.Screen name="Login" component={Login} />
        </drawer.Navigator>
    )
}

const MenuItems = ({ navigation }) => {
    return (
        <DrawerContentScrollView style={styles.container}>
            <Text style={styles.title}>Mi menu</Text>

            <MenuButtonItems
                text="Welcome"
                onPress={() => navigation.navigate("Welcome")}
                image={"https://images.pexels.com/photos/3643925/pexels-photo-3643925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            />

            <MenuButtonItems
                image={"https://media.istockphoto.com/id/1390481905/es/foto/multi-factor-authentication-user-login-cybersecurity-privacy-protect-data-tecnolog%C3%ADa-de.jpg?s=2048x2048&w=is&k=20&c=B0-zsJU01SG9_DFHz56WhtqXVeA8l9qbQTTsrzHSEwQ="}
                text="Login"
                onPress={() => navigation.navigate("Login")}
            />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20
    }
})