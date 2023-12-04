import { createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";
import { TabNavigation } from "./TabNavigation";
import { WelcomeSinButton } from "../WelcomeSinButton";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text } from 'react-native';
import MenuButtonItems from "../../components/MenuButtonItems";

const drawer = createDrawerNavigator()

export function DraweNavigationFinal() {
    return (
        <NavigationContainer independent={true}>
            <drawer.Navigator drawerContent={(props) => <MenuItems {... props}/>}>
                <drawer.Screen name="Welcome" component={WelcomeSinButton} />
                <drawer.Screen name="TabNavigation" component={TabNavigation}/>
            </drawer.Navigator>
        </NavigationContainer>
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
                image={"https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                text="Trabajo"
                onPress={() => navigation.navigate("TabNavigation")}
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