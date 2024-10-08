import React, { Suspense } from "react";

import { StatusBar } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import Home from "./Home";
import { RootStackParamList } from "./type";

import { Spinner } from "@/components/Spinner";
import globalStyles from "@/theme/globalStyles";

const MainStack = createNativeStackNavigator<RootStackParamList>();

const RootRouter = () => (
  <SafeAreaView style={[globalStyles.defaultFlexContainer, globalStyles.defaultBackgroundColor]}>
    <StatusBar
      barStyle="dark-content"
      backgroundColor={globalStyles.defaultBackgroundColor.backgroundColor}
    />
    <Suspense fallback={<Spinner />} />
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, animation: "default" }}
      />
    </MainStack.Navigator>
  </SafeAreaView>
);

export default RootRouter;
