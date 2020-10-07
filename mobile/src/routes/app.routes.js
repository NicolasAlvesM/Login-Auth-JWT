import React from 'react';
import Dahboard from '../pages/Dashboard'
import {createStackNavigator} from '@react-navigation/stack'
const AppStack = createStackNavigator();
const AppRoutes=()=>(
    <AppStack.Navigator>
        <AppStack.Screen name="Dashboard" component={Dahboard}/>
    </AppStack.Navigator>
)
export default AppRoutes