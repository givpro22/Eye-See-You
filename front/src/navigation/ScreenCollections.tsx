// ++ New Screen 
import SplashScreen from "../screens/auth/SplashSceen";
import LoginScreen from "../screens/auth/LoginScreen";
import TestScreen from "../screens/auth/TestScreen";
import HomeScreen from "../screens/dash/HomeScreen";
import AllMenuScreen from "../screens/dash/AllMenuScreen";

// ++ Screen Type ??

// ++ New Screen Stack
export const authStack = [
    {
        name: 'SplashScreen',
        component: SplashScreen,
    },
    {
        name: 'LoginScreen',
        component: LoginScreen,
    },
    {
        name: 'TestScreen',
        component: TestScreen,
    },
    {
        name: 'HomeScreen',
        component: HomeScreen,
    },
    
    {
        name: 'AllMenuScreen',
        component: AllMenuScreen,
    },
];

export const dashboardStack = [
  
];

export const mergedStacks = [...dashboardStack, ...authStack];