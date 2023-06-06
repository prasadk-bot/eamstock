import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openCameraUtil from '../utils/openCamera';
import openImagePickerUtil from '../utils/openImagePicker';
import selectFileUtil from '../utils/selectFile';
import {
  Button,
  Icon,
  IconButton,
  Picker,
  ScreenContainer,
  Stepper,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const StockPage1Screen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      undefined;
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [Showminus, setShowminus] = React.useState(false);
  const [Showminus1, setShowminus1] = React.useState(false);
  const [Showminus2, setShowminus2] = React.useState(false);
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [pickerValue3, setPickerValue3] = React.useState('');
  const [stepper2Value, setStepper2Value] = React.useState('');
  const [stepperValue, setStepperValue] = React.useState('');
  const [stepperValue2, setStepperValue2] = React.useState('');
  const [stepperValue3, setStepperValue3] = React.useState('');
  const [stepperValue4, setStepperValue4] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textAreaValue2, setTextAreaValue2] = React.useState('');
  const [textAreaValue3, setTextAreaValue3] = React.useState('');
  const [textAreaValue4, setTextAreaValue4] = React.useState('');
  const [textAreaValue5, setTextAreaValue5] = React.useState('');
  const [textAreaValue6, setTextAreaValue6] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* Navigation view */}
      <View
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Navigation view'],
          dimensions.width
        )}
      >
        {/* Left Frame */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 40,
            },
            dimensions.width
          )}
        >
          <Touchable />
          <Icon size={24} name={'Ionicons/menu'} />
        </View>
        {/* Middle Frame */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              alignSelf: 'auto',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              marginTop: 40,
            },
            dimensions.width
          )}
        >
          {/* Screen Heading */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                alignSelf: 'auto',
                fontFamily: 'Roboto_700Bold',
                fontSize: 18,
                lineHeight: 20,
                textAlign: 'auto',
              }),
              dimensions.width
            )}
          >
            {'FG EAM Mobile'}
          </Text>
        </View>
        {/* Right Frame */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 40,
            },
            dimensions.width
          )}
        >
          <Touchable />
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                fontFamily: 'Roboto_500Medium',
                fontSize: 16,
                paddingBottom: 3,
                paddingTop: 3,
              }),
              dimensions.width
            )}
          >
            {'EN\n'}
          </Text>
          {/* Touchable 2 */}
          <Touchable />
          {/* Bell */}
          <Icon
            style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
            size={24}
            name={'MaterialCommunityIcons/bell'}
          />
          {/* Touchable 3 */}
          <Touchable />
          {/* Person */}
          <Icon
            style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
            size={24}
            name={'Ionicons/person'}
          />
        </View>
      </View>

      <View style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}>
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              alignSelf: 'flex-start',
              color: theme.colors['Custom Color'],
              fontFamily: 'Roboto_700Bold',
              fontSize: 18,
              marginLeft: 20,
              paddingLeft: 10,
              paddingRight: 10,
            }),
            dimensions.width
          )}
        >
          {'Stock taking'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { alignItems: 'stretch', marginBottom: 40 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        <ScrollView
          contentContainerStyle={StyleSheet.applyWidth(
            {
              marginBottom: 40,
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 16,
            },
            dimensions.width
          )}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          {/* Main view */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['view1'], {
                marginBottom: 30,
                paddingBottom: 40,
                paddingLeft: 10,
                paddingRight: 10,
              }),
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { borderColor: theme.colors['Divider'], paddingTop: 10 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 18,
                    lineHeight: 20,
                    paddingBottom: 5,
                    paddingTop: 5,
                  },
                  dimensions.width
                )}
              >
                {'SCH_1001 |  14-04-2023'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    lineHeight: 20,
                    paddingBottom: 5,
                    paddingTop: 5,
                  },
                  dimensions.width
                )}
              >
                {'Visakhapatnam -HQ |  Visakhapatnam'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    lineHeight: 20,
                    paddingBottom: 5,
                    paddingTop: 5,
                  },
                  dimensions.width
                )}
              >
                {
                  '39122305-0001 - Programmable logic controller distributed on machine I/O subsystem | Control network linking device\n'
                }
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    lineHeight: 20,
                    paddingBottom: 5,
                    paddingTop: 5,
                  },
                  dimensions.width
                )}
              >
                {'Bin location'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                { borderColor: theme.colors['Divider'], flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Picker
                onValueChange={newPickerValue => {
                  const pickerValue = newPickerValue;
                  try {
                    setPickerValue3(newPickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth({ height: 40 }, dimensions.width)}
                options={Constants['data']}
                value={pickerValue3}
                type={'solid'}
                leftIconMode={'inset'}
                rightIconName={'Entypo/chevron-thin-down'}
                placeholderTextColor={theme.colors['BG Gray']}
                iconSize={16}
                autoDismissKeyboard={false}
                disabled={false}
                placeholder={'Select bin location'}
              />
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    lineHeight: 20,
                    paddingBottom: 5,
                    paddingTop: 5,
                  },
                  dimensions.width
                )}
              >
                {'Current quantity'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    lineHeight: 20,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 5,
                  },
                  dimensions.width
                )}
              >
                {'1.0'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    lineHeight: 20,
                    paddingBottom: 5,
                    paddingTop: 5,
                  },
                  dimensions.width
                )}
              >
                {'Material type'}
              </Text>
              {/* Text 2 */}
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Roboto_400Regular',
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 5,
                  }),
                  dimensions.width
                )}
              >
                {'New'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { paddingBottom: 5, paddingTop: 5 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_400Regular',
                      lineHeight: 20,
                      paddingBottom: 5,
                      paddingTop: 5,
                    },
                    dimensions.width
                  )}
                >
                  {'Actual quantity '}
                </Text>
              </View>
              {/* Stepper view */}
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['view111'],
                    { alignItems: 'center' }
                  ),
                  dimensions.width
                )}
              >
                {/* Stepper 2 */}
                <Stepper
                  onChange={newStepper2Value => {
                    const stepperValue = newStepper2Value;
                    try {
                      setStepper2Value(newStepper2Value);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  iconSize={24}
                  iconColor={theme.colors.strong}
                  value={stepperValue}
                  min={0}
                />
              </View>
              {/* Scanner view */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 5,
                  },
                  dimensions.width
                )}
              >
                <Touchable />
                <IconButton
                  onPress={() => {
                    const handler = async () => {
                      try {
                        await openCameraUtil({ cameraType: 'back' });
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  size={32}
                  icon={'MaterialIcons/qr-code-scanner'}
                  color={theme.colors['ShopAppBlue']}
                />
              </View>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    lineHeight: 20,
                    paddingBottom: 5,
                    paddingTop: 5,
                  },
                  dimensions.width
                )}
              >
                {'Quantity discrepancy'}
              </Text>
              {/* Text 2 */}
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Roboto_400Regular',
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 5,
                  }),
                  dimensions.width
                )}
              >
                {'1.0'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ViewStyles(theme)['view14'], {
                  width: '100%',
                }),
                dimensions.width
              )}
            >
              <TextInput
                onChangeText={newTextAreaValue => {
                  const textInputValue = newTextAreaValue;
                  try {
                    setTextAreaValue6(newTextAreaValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextInputStyles(theme)['Text Area'],
                    {
                      borderRadius: 8,
                      fontFamily: 'Roboto_400Regular',
                      paddingLeft: 10,
                      paddingTop: 10,
                      width: '100%',
                    }
                  ),
                  dimensions.width
                )}
                placeholder={'Remarks'}
                value={textAreaValue6}
                textAlignVertical={'top'}
                multiline={true}
                numberOfLines={4}
                autoFocus={true}
                placeholderTextColor={theme.colors['Custom #8a847d']}
              />
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                { borderColor: theme.colors['Divider'], borderTopWidth: 1 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 14,
                    marginBottom: 5,
                    marginTop: 5,
                  }),
                  dimensions.width
                )}
              >
                {'Upload images'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', justifyContent: 'space-between' },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'column', height: 90, width: 90 },
                  dimensions.width
                )}
              >
                <Touchable
                  onPress={() => {
                    const handler = async () => {
                      try {
                        const img = await openImagePickerUtil({});
                        setGlobalVariableValue({
                          key: 'userpic',
                          value: img,
                        });
                        setShowminus(!Showminus);
                        await selectFileUtil({});
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Divider'],
                      borderLeftWidth: 1,
                      borderRadius: 20,
                      borderRightWidth: 1,
                      borderStyle: 'solid',
                      borderTopWidth: 1,
                      height: 90,
                      width: 90,
                    },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: 90,
                        justifyContent: 'center',
                        width: 90,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      style={StyleSheet.applyWidth(
                        { height: 90, width: 90 },
                        dimensions.width
                      )}
                      color={theme.colors['TextPlaceholder']}
                      name={'Entypo/upload-to-cloud'}
                      size={40}
                    />
                    <Image
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          {
                            height: 90,
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            width: 90,
                          }
                        ),
                        dimensions.width
                      )}
                      resizeMode={'cover'}
                      source={{ uri: `${Constants['userpic']}` }}
                    />
                  </View>
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      { paddingTop: 10 },
                      dimensions.width
                    )}
                  >
                    {/* Touchable 2 */}
                    <>
                      {!Showminus ? null : (
                        <Touchable
                          onPress={() => {
                            try {
                              setGlobalVariableValue({
                                key: 'userpic',
                                value: 'empty ""',
                              });
                              setShowminus(!Showminus);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                justifyContent: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            <Icon
                              size={24}
                              name={'AntDesign/minuscircleo'}
                              color={theme.colors['TextPlaceholder']}
                            />
                          </View>
                        </Touchable>
                      )}
                    </>
                  </View>
                </Touchable>
              </View>
              {/* Uplaod view2 */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', height: 90, width: 90 },
                  dimensions.width
                )}
              >
                <Touchable
                  onPress={() => {
                    const handler = async () => {
                      try {
                        const img = await openImagePickerUtil({});
                        setGlobalVariableValue({
                          key: 'userpic1',
                          value: img,
                        });
                        setShowminus1(!Showminus1);
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Divider'],
                      borderLeftWidth: 1,
                      borderRadius: 20,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 90,
                      width: 90,
                    },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: 90,
                        justifyContent: 'center',
                        width: 90,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      style={StyleSheet.applyWidth(
                        { height: 90, width: 90 },
                        dimensions.width
                      )}
                      color={theme.colors['TextPlaceholder']}
                      name={'Entypo/upload-to-cloud'}
                      size={40}
                    />
                    <Image
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          {
                            height: 90,
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            width: 90,
                          }
                        ),
                        dimensions.width
                      )}
                      resizeMode={'cover'}
                      source={{ uri: `${Constants['userpic1']}` }}
                    />
                  </View>
                  {/* view2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      { paddingTop: 10 },
                      dimensions.width
                    )}
                  >
                    {/* Touchable 2 */}
                    <>
                      {!Showminus1 ? null : (
                        <Touchable
                          onPress={() => {
                            try {
                              setGlobalVariableValue({
                                key: 'userpic1',
                                value: 'empty""',
                              });
                              setShowminus1(!Showminus1);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                justifyContent: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            <Icon
                              size={24}
                              name={'AntDesign/minuscircleo'}
                              color={theme.colors['TextPlaceholder']}
                            />
                          </View>
                        </Touchable>
                      )}
                    </>
                  </View>
                </Touchable>
              </View>
              {/* Upload view3 */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', height: 90, width: 90 },
                  dimensions.width
                )}
              >
                <Touchable
                  onPress={() => {
                    const handler = async () => {
                      try {
                        const img = await openImagePickerUtil({});
                        setGlobalVariableValue({
                          key: 'userpic2',
                          value: img,
                        });
                        setShowminus2(!Showminus2);
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Divider'],
                      borderLeftWidth: 1,
                      borderRadius: 20,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 90,
                      width: 90,
                    },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: 90,
                        justifyContent: 'center',
                        width: 90,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      style={StyleSheet.applyWidth(
                        { height: 90, width: 90 },
                        dimensions.width
                      )}
                      color={theme.colors['TextPlaceholder']}
                      name={'Entypo/upload-to-cloud'}
                      size={40}
                    />
                    <Image
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          {
                            height: 90,
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            width: 90,
                          }
                        ),
                        dimensions.width
                      )}
                      resizeMode={'cover'}
                      source={{ uri: `${Constants['userpic2']}` }}
                    />
                  </View>
                  {/* view2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      { paddingTop: 10 },
                      dimensions.width
                    )}
                  >
                    {/* Touchable 2 */}
                    <>
                      {!Showminus2 ? null : (
                        <Touchable
                          onPress={() => {
                            try {
                              setGlobalVariableValue({
                                key: 'userpic2',
                                value: 'empty""',
                              });
                              setShowminus2(!Showminus2);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                justifyContent: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            <Icon
                              size={24}
                              name={'AntDesign/minuscircleo'}
                              color={theme.colors['TextPlaceholder']}
                            />
                          </View>
                        </Touchable>
                      )}
                    </>
                  </View>
                </Touchable>
              </View>
            </View>
          </View>
          {/* Button */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Button view'],
                { marginTop: 20 }
              ),
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth({ width: 100 }, dimensions.width)}
            >
              {/* Save */}
              <Button
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'],
                    {
                      color: theme.colors['Custom Color_3'],
                      fontFamily: 'Roboto_700Bold',
                      lineHeight: 20,
                    }
                  ),
                  dimensions.width
                )}
                title={'Save'}
              />
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth({ width: 100 }, dimensions.width)}
            >
              {/* Submit */}
              <Button
                onPress={() => {
                  try {
                    navigation.navigate('HomeScreen_cVoyTkCe');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'],
                    {
                      backgroundColor: theme.colors['Custom Color_21'],
                      fontFamily: 'Roboto_700Bold',
                      lineHeight: 20,
                    }
                  ),
                  dimensions.width
                )}
                title={'Submit'}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(StockPage1Screen);
