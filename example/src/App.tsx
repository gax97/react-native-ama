import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import { AMAProvider } from 'react-native-ama';
import ErrorBoundary from 'react-native-error-boundary';

import { BackButton } from './components/BackButton';
import { Header } from './components/Header';
import { HomeScreen } from './screens/Home.screen';
import { PressableScreen } from './screens/Pressable.screen';
import { SpanScreen } from './screens/Span.screen';
import { TextScreen } from './screens/Text.screen';
import type { RootStackParamList } from './types';
import { TouchableOpacityScreen } from './screens/TouchableOpacity.screen';

const App = () => {
  return (
    <ErrorBoundary>
      <AMAProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={BaseNavigatorOptions}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitle: () => <Header title={'AMA Demo'} />,
              }}
            />
            <Stack.Screen
              name="Pressable"
              component={PressableScreen}
              options={{
                headerLeft: () => <BackButton />,
                headerTitle: () => (
                  <Header title={'Pressable Demo'} autofocus />
                ),
              }}
            />
            <Stack.Screen
              name="TouchableOpacity"
              component={TouchableOpacityScreen}
              options={{
                headerLeft: () => <BackButton />,
                headerTitle: () => (
                  <Header title={'TouchableOpacity Demo'} autofocus />
                ),
              }}
            />
            <Stack.Screen
              name="Text"
              component={TextScreen}
              options={{
                headerLeft: () => <BackButton />,
                headerTitle: () => <Header title={'Text Demo'} autofocus />,
              }}
            />
            <Stack.Screen
              name="Span"
              component={SpanScreen}
              options={{
                headerLeft: () => <BackButton />,
                headerTitle: () => <Header title={'Span Demo'} autofocus />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AMAProvider>
    </ErrorBoundary>
  );
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const BaseNavigatorOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerBackVisible: false,
};

export default App;
