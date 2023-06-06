import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const ProfileScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <View style={StyleSheet.applyWidth({ marginTop: 40 }, dimensions.width)}>
        {/* View 2 */}
        <View>
          {/* Page title */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                fontFamily: 'Roboto_400Regular',
                fontSize: 18,
                lineHeight: 20,
                marginLeft: 20,
                marginTop: 30,
              }),
              dimensions.width
            )}
          >
            {'Profile details'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
        >
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Custom #f06454'],
                fontFamily: 'Roboto_700Bold',
                fontSize: 16,
                lineHeight: 20,
                marginLeft: 20,
                marginRight: 20,
                paddingBottom: 10,
                paddingTop: 10,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Hello '}
            {Constants['user_name']}
            {'  Welcome!'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              { marginLeft: 20, marginRight: 20, marginTop: 30 },
              dimensions.width
            )}
          >
            <Button
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'AUTH_TOKEN',
                    value: '',
                  });
                  navigation.navigate('LogincopyScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                  fontFamily: 'Roboto_700Bold',
                }),
                dimensions.width
              )}
              title={'Logout'}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ProfileScreen);
