// ++ New Screen 
import SplashScreen from "../screens/auth/SplashSceen";
import LoginScreen from "../screens/auth/LoginScreen";
import TestScreen from "../screens/auth/TestScreen";

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
    }
];

export const dashboardStack = [
  
];

export const mergedStacks = [...dashboardStack, ...authStack];