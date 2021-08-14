import { useEffect, useState } from "react";
import * as Location from 'expo-location';

import React from 'react'

const useLocation = () => {
    const [location, setLocation] = useState();

    const getLocation = async () => {
        try {
            const {granted} = await Location.requestForegroundPermissionsAsync();
            if(!granted) return;
            const {coords: {latitude, longitude}} = Location.getLastKnownPositionAsync();
            setLocation({latitude, longitude})
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLocation();
    }, [])

    return location;

}

export default useLocation
