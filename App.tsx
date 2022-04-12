import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {AppStackScreen, navigationRef} from "./src/Navigation/Navigation";

export default function App() {
    return (
        <NavigationContainer ref={navigationRef}>
            <AppStackScreen/>
        </NavigationContainer>
    );
}
