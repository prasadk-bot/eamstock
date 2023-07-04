import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import HomeScreen from './screens/HomeScreen';
import HomeScreen3 from './screens/HomeScreen3';
import HomeScreenCopy from './screens/HomeScreenCopy';
import HomeScreenCopyCopy from './screens/HomeScreenCopyCopy';
import HomeScreen_cVoyTkCe from './screens/HomeScreen_cVoyTkCe';
import LoginScreen from './screens/LoginScreen';
import LoginScreen3 from './screens/LoginScreen3';
import LogincopyScreen from './screens/LogincopyScreen';
import ProfileScreen from './screens/ProfileScreen';
import StockPage1CopyScreen from './screens/StockPage1CopyScreen';
import StockPage1Screen from './screens/StockPage1Screen';
import StockPage2Screen from './screens/StockPage2Screen';
import StockPage3Screen from './screens/StockPage3Screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="LoginScreen3"
        screenOptions={{
          cardStyle: {
            backgroundColor: theme.colors['Custom #5f5a53'],
          },
          cardShadowEnabled: false,
          cardOverlayEnabled: false,
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="LogincopyScreen"
          component={LogincopyScreen}
          options={{
            title: 'Login copy',
          }}
        />
        <Stack.Screen
          name="HomeScreen_cVoyTkCe"
          component={HomeScreen_cVoyTkCe}
          options={{
            title: 'Home Screen',
          }}
        />
        <Stack.Screen
          name="StockPage1Screen"
          component={StockPage1Screen}
          options={{
            title: 'Stock Page 1',
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: 'Profile',
          }}
        />
        <Stack.Screen
          name="StockPage1CopyScreen"
          component={StockPage1CopyScreen}
          options={{
            title: 'Stock Page 1 Copy',
          }}
        />
        <Stack.Screen
          name="HomeScreenCopy"
          component={HomeScreenCopy}
          options={{
            title: 'Home Screen Copy',
          }}
        />
        <Stack.Screen
          name="StockPage2Screen"
          component={StockPage2Screen}
          options={{
            title: 'Stock Page 2',
          }}
        />
        <Stack.Screen
          name="HomeScreenCopyCopy"
          component={HomeScreenCopyCopy}
          options={{
            title: 'Home Screen Copy Copy',
          }}
        />
        <Stack.Screen
          name="HomeScreen3"
          component={HomeScreen3}
          options={{
            title: 'Home Screen3',
          }}
        />
        <Stack.Screen
          name="LoginScreen3"
          component={LoginScreen3}
          options={{
            title: 'Login Screen3',
          }}
        />
        <Stack.Screen
          name="StockPage3Screen"
          component={StockPage3Screen}
          options={{
            title: 'Stock Page 3',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
