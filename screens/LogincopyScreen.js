import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as BASEURLApi from '../apis/BASEURLApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Checkbox,
  Icon,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';

const LogincopyScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [hiddenPassword, setHiddenPassword] = React.useState(true);
  const [passwordValue, setPasswordValue] = React.useState('');
  const [usernameValue, setUsernameValue] = React.useState('');
  const [visiblePassword, setVisiblePassword] = React.useState(false);

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      {/* view */}
      <View
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['view 2'],
          dimensions.width
        )}
      >
        {/* Logo */}
        <Image
          style={StyleSheet.applyWidth(
            { height: 60, width: 150 },
            dimensions.width
          )}
          resizeMode={'cover'}
          source={Images.Utility1}
        />
        {/* Login to Your Account */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Roboto_700Bold',
              fontSize: 18,
              marginTop: 50,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Login to Your Account'}
        </Text>
        {/* Username */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['BG Gray'],
              borderBottomWidth: 1,
              borderColor: theme.colors['Divider'],
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 50,
              justifyContent: 'space-between',
              marginBottom: 50,
              marginTop: 50,
              paddingLeft: 20,
              paddingRight: 20,
              width: '100%',
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Custom Color_20']}
            name={'Ionicons/ios-person'}
          />
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingLeft: 10, paddingRight: 10 },
              dimensions.width
            )}
          >
            {/* Username Input */}
            <TextInput
              onChangeText={newUsernameInputValue => {
                try {
                  setUsernameValue(newUsernameInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  fontFamily: 'Roboto_400Regular',
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              placeholder={'Username'}
              value={usernameValue}
              editable={true}
              placeholderTextColor={theme.colors['Custom Color_20']}
              enablesReturnKeyAutomatically={false}
              clearTextOnFocus={false}
              multiline={false}
            />
          </View>
        </View>
        {/* Password */}
        <>
          {!hiddenPassword ? null : (
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['BG Gray'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 16,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  height: 50,
                  justifyContent: 'space-between',
                  marginBottom: 40,
                  marginTop: 40,
                  paddingLeft: 20,
                  paddingRight: 20,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors['Custom Color_20']}
                name={'FontAwesome/lock'}
              />
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 10, paddingRight: 10 },
                  dimensions.width
                )}
              >
                {/* Password Input */}
                <TextInput
                  onChangeText={newPasswordInputValue => {
                    try {
                      setPasswordValue(newPasswordInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      borderRadius: 8,
                      paddingBottom: 8,
                      paddingLeft: 8,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  placeholder={'Password'}
                  value={passwordValue}
                  editable={true}
                  placeholderTextColor={theme.colors['Custom Color_20']}
                  secureTextEntry={true}
                />
              </View>
              <Checkbox
                onPress={newCheckboxValue => {
                  const checkboxValue = newCheckboxValue;
                  try {
                    setCheckboxValue(newCheckboxValue);
                    setVisiblePassword(true);
                    setHiddenPassword(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                status={checkboxValue}
                uncheckedIcon={'Ionicons/eye-off'}
                checkedIcon={'Ionicons/eye-off'}
                uncheckedColor={theme.colors['TextPlaceholder']}
                color={theme.colors['TextPlaceholder']}
              />
            </View>
          )}
        </>
        {/* Password */}
        <>
          {!visiblePassword ? null : (
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['BG Gray'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 16,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  height: 50,
                  justifyContent: 'space-between',
                  marginBottom: 40,
                  marginTop: 40,
                  paddingLeft: 20,
                  paddingRight: 20,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors['Custom Color_20']}
                name={'FontAwesome/lock'}
              />
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 10, paddingRight: 10 },
                  dimensions.width
                )}
              >
                {/* Password Input */}
                <TextInput
                  onChangeText={newPasswordInputValue => {
                    try {
                      setPasswordValue(newPasswordInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      borderRadius: 8,
                      paddingBottom: 8,
                      paddingLeft: 8,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  placeholder={'Password'}
                  value={passwordValue}
                  editable={true}
                  placeholderTextColor={theme.colors['Custom Color_20']}
                  secureTextEntry={false}
                />
              </View>
              <Checkbox
                onPress={newCheckboxValue => {
                  const checkboxValue = newCheckboxValue;
                  try {
                    setHiddenPassword(true);
                    setVisiblePassword(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                status={checkboxValue}
                uncheckedIcon={'Ionicons/eye'}
                checkedIcon={'Ionicons/eye'}
                color={theme.colors['TextPlaceholder']}
                uncheckedColor={theme.colors['TextPlaceholder']}
              />
            </View>
          )}
        </>
        {/* Error Message */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              color: theme.colors['Error'],
              fontFamily: 'Roboto_400Regular',
            }),
            dimensions.width
          )}
        >
          {Constants['ERROR_MESSAGE']}
        </Text>
        {/* Sign in */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                setGlobalVariableValue({
                  key: 'ERROR_MESSAGE',
                  value: '',
                });
                const signInResponseJSON = await BASEURLApi.signInApiPOST(
                  Constants,
                  { password: passwordValue, userName: usernameValue }
                );
                const signinAuthToken = signInResponseJSON?.authToken;
                const signInName = signInResponseJSON?.name;
                const SigninErrorMessage = signInResponseJSON?.message;
                setGlobalVariableValue({
                  key: 'user_name',
                  value: signInName,
                });
                setGlobalVariableValue({
                  key: 'ERROR_MESSAGE',
                  value: SigninErrorMessage,
                });
                if (!signinAuthToken) {
                  return;
                }
                setGlobalVariableValue({
                  key: 'AUTH_TOKEN',
                  value: signinAuthToken,
                });
                navigation.navigate('HomeScreenCopy');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.primary,
              borderRadius: 100,
              fontFamily: 'Roboto_400Regular',
              fontSize: 15,
              height: 58,
              marginTop: 40,
              textAlign: 'center',
              width: '100%',
            },
            dimensions.width
          )}
          title={'Login'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LogincopyScreen);
