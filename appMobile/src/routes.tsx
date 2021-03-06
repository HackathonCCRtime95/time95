import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Points from './pages/Points';
import DashNotification from './pages/dashNotification';


const AppStack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Points" component={Points} />
                <AppStack.Screen name="DashNotification" component={DashNotification} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
