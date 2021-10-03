import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListEditingScreen from '../screens/ListEditingScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import routes from '../navigation/routes'

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    const icons = {
                        Feed: 'home',
                        Account: 'account',
                    };
                    return <MaterialCommunityIcons name={icons[route.name]} size={size} color={color} />
                }
            })}
        >
            <Tab.Screen name="Feed" component={FeedNavigator} />
            <Tab.Screen
                name="ListingEdit"
                component={ListEditingScreen}
                options={
                    ({ navigation }) => ({
                        tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />
                    })
                }
            />
            <Tab.Screen name="Account" component={AccountNavigator} />
        </Tab.Navigator >)
}

export default AppNavigator;