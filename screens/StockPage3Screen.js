import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as PostStockTakingDetailsApi from '../apis/PostStockTakingDetailsApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openCameraUtil from '../utils/openCamera';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  Button,
  Icon,
  IconButton,
  Picker,
  ScreenContainer,
  Stepper,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as ImagePicker from 'expo-image-picker';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const StockPage3Screen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const myFunctionName = (binList, binLocation) => {
    console.log('binlist' + binLocation);
    //console.log("binlist"+binList.length)
    for (let i = 0; i <= binList.length; i++) {
      console.log(binList[i].binLocation);
      if (binList[i].binLocation == binLocation) {
        console.log('binquantity' + binList[i].quantity);
        console.log('type' + binList[i].type);
        console.log('actualqty' + binList[i].actualQuantity);
        setCrtQty(binList[i].quantity);
        setMtype(binList[i].type);
        //setactualQty(binList[i].actualQuantity);
        setActualQuantity(binList[i].actualQuantity);
        setQtyDisprncy(binList[i].discrepancyQuantity);
        setRemarks(binList[i].remarks);
      }

      //setActQty(binList[i].actualQuantity);
    }

    //console.log("type"+binList[0].type)
    //console.log("actqty"+binList[0].actualQuantity)
    //setCrtQty(binList[0].quantity);
    //setMtype(binList[0].type);
    //setactualQuantity(binList[0].actualQuantity);
    //return binList.map((Location) => {
    //console.log("binquantity"+Location.quantity)
    //});
    return binList[i].binLocation;

    //setQtyDisprncy(binList[0].quantity)

    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
  };

  const transformToPickerOptions = StockBinLocation => {
    return StockBinLocation.map(Location => {
      return { label: Location.binLocation, value: Location.binLocation };
    });
  };

  const subtractionfun = (CrtQty, ActQty) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    console.log('crtqty' + CrtQty);
    console.log('actqty' + ActQty);
    //const valid = false;
    // console.log("totalqty" + CrtQty - ActQty)
    // setQtyDisprncy(CrtQty - ActQty)
    //if(ActQty<=CrtQty){
    if (ActQty <= CrtQty) {
      //console.log("actqty" + ActQty)
      setQtyDisprncy(CrtQty - ActQty);
    } else {
      setQtyDisprncy(CrtQty);
    }

    //valid=true;
    //}
    //if(valid){
    // return 'true'
    //}
    //else{
    // return 'false';
    // }

    return CrtQty - ActQty;
  };

  const CovertImageToBase64 = async img => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example
: "line one line two" ) */

    //const fs = require('fs');
    //const path = require('path');

    //const imagePath = '/path/to/image.jpg';
    //const imageExtension = path.extname(imagePath).substr(1);
    //const imageBuffer = fs.readFileSync(imagePath);

    const blob = await (await fetch(img)).blob();
    var myFile = new File([blob], fileName, { type: blob.type });
    console.log('myFile' + myFile);
    console.log('base64image' + img);
    //console.log("base64imageextension"+imageExtension);
    return img;
  };

  const { theme } = props;
  const { navigation } = props;

  const postStockTakingDetailsPostStockDetailsServicePOST =
    PostStockTakingDetailsApi.usePostStockDetailsServicePOST();

  const [ActQty, setActQty] = React.useState('');
  const [ActualQuantity, setActualQuantity] = React.useState('');
  const [CrtQty, setCrtQty] = React.useState('');
  const [Mtype, setMtype] = React.useState('');
  const [QtyDisprncy, setQtyDisprncy] = React.useState('');
  const [Remarks, setRemarks] = React.useState('');
  const [SCHEDULENO, setSCHEDULENO] = React.useState('');
  const [Showminus, setShowminus] = React.useState(false);
  const [Showminus1, setShowminus1] = React.useState(false);
  const [Showminus2, setShowminus2] = React.useState(false);
  const [binLocation, setBinLocation] = React.useState('');
  const [completed, setCompleted] = React.useState(false);
  const [inProgress, setInProgress] = React.useState(false);
  const [notYetStarted, setNotYetStarted] = React.useState(true);
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [pickerValue3, setPickerValue3] = React.useState('');
  const [stepper2Value, setStepper2Value] = React.useState('');
  const [stepperValue, setStepperValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textAreaValue2, setTextAreaValue2] = React.useState('');
  const [textAreaValue3, setTextAreaValue3] = React.useState('');
  const [textAreaValue4, setTextAreaValue4] = React.useState('');
  const [textAreaValue5, setTextAreaValue5] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [userImage1, setUserImage1] = React.useState('');
  const [userImage2, setUserImage2] = React.useState('');
  const [userImage3, setUserImage3] = React.useState('');

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
              GlobalStyles.TextStyles(theme)['Text'],
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
                {props.route?.params?.scheduleno ?? ''}
                {' | '}
                {props.route?.params?.schedule ?? ''}
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
                {props.route?.params?.storeoffice ?? ''}
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
                {props.route?.params?.materialcode ?? ''}
                {' - '}
                {props.route?.params?.materialname ?? ''}
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
                  try {
                    const binData = myFunctionName(
                      Constants['stockscheduledata'],
                      (() => {
                        const e = newPickerValue;
                        console.log(e);
                        return e;
                      })()
                    );
                    setBinLocation(newPickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth({ height: 40 }, dimensions.width)}
                options={transformToPickerOptions(
                  Constants['stockscheduledata']
                )}
                type={'solid'}
                leftIconMode={'inset'}
                rightIconName={'Entypo/chevron-thin-down'}
                placeholderTextColor={theme.colors['BG Gray']}
                iconSize={16}
                autoDismissKeyboard={false}
                disabled={false}
                placeholder={'select bin location'}
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
                {CrtQty}
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
                {Mtype}
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
              {/* Actual qty view */}
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['view111'],
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Divider'],
                      borderLeftWidth: 1,
                      borderRadius: 8,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      marginBottom: 10,
                    }
                  ),
                  dimensions.width
                )}
              >
                {/* Actual qty */}
                <TextInput
                  onChangeText={newActualQtyValue => {
                    try {
                      const qtydisp = subtractionfun(CrtQty, newActualQtyValue);
                      setActualQuantity(newActualQtyValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextInputStyles(theme)['Text Input'],
                      { fontFamily: 'Roboto_400Regular', paddingLeft: 3 }
                    ),
                    dimensions.width
                  )}
                  value={ActualQuantity}
                  placeholder={'Enter actual qty'}
                  autoCapitalize={'none'}
                  placeholderTextColor={theme.colors['TextPlaceholder']}
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
                {' '}
                {QtyDisprncy}{' '}
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
                    if ((props.route?.params?.buttonType ?? '') !== undefined) {
                      setRemarks(newTextAreaValue);
                    }
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
                value={Remarks}
                placeholder={'Remarks'}
                textAlignVertical={'top'}
                multiline={true}
                numberOfLines={4}
                autoFocus={true}
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
                          value: (() => {
                            const e = img;
                            console.log(e);
                            return e;
                          })(),
                        });
                        setShowminus(!Showminus);
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
                      { paddingTop: 4 },
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
                            <>
                              {!Showminus ? null : (
                                <Icon
                                  size={24}
                                  name={'AntDesign/minuscircleo'}
                                  color={theme.colors['TextPlaceholder']}
                                />
                              )}
                            </>
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
                        const img1 = await openImagePickerUtil({});
                        setGlobalVariableValue({
                          key: 'userpic1',
                          value: (() => {
                            const e = img1;
                            console.log(e);
                            return e;
                          })(),
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
                  <View>
                    {/* Touchable 2 */}
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
                          { alignItems: 'center', justifyContent: 'center' },
                          dimensions.width
                        )}
                      >
                        <>
                          {!Showminus1 ? null : (
                            <Icon
                              size={24}
                              name={'AntDesign/minuscircleo'}
                              color={theme.colors['TextPlaceholder']}
                            />
                          )}
                        </>
                      </View>
                    </Touchable>
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
                        const img3 = await openImagePickerUtil({});
                        setGlobalVariableValue({
                          key: 'userpic2',
                          value: (() => {
                            const e = img3;
                            console.log(e);
                            return e;
                          })(),
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
                  <View>
                    {/* Touchable 2 */}
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
                          { alignItems: 'center', justifyContent: 'center' },
                          dimensions.width
                        )}
                      >
                        <>
                          {!Showminus2 ? null : (
                            <Icon
                              size={24}
                              name={'AntDesign/minuscircleo'}
                              color={theme.colors['TextPlaceholder']}
                            />
                          )}
                        </>
                      </View>
                    </Touchable>
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
              <>
                {props.route?.params?.buttonType ?? '' ? null : (
                  <Button
                    onPress={() => {
                      const handler = async () => {
                        try {
                          await postStockTakingDetailsPostStockDetailsServicePOST.mutateAsync(
                            {
                              actualQuantity: (() => {
                                const e = ActualQuantity;
                                console.log(e);
                                return e;
                              })(),
                              binLocation: (() => {
                                const e = binLocation;
                                console.log(e);
                                return e;
                              })(),
                              buttonType: (() => {
                                const e = 'SAVE';
                                console.log(e);
                                return e;
                              })(),
                              dispQuantity: (() => {
                                const e = QtyDisprncy;
                                console.log(e);
                                return e;
                              })(),
                              quantity: (() => {
                                const e = CrtQty;
                                console.log(e);
                                return e;
                              })(),
                              remarks: (() => {
                                const e = Remarks;
                                console.log(e);
                                return e;
                              })(),
                              scheduleNo: (() => {
                                const e = props.route?.params?.scheduleno ?? '';
                                console.log(e);
                                return e;
                              })(),
                              uploadImage1: (() => {
                                const e = Constants['userpic'];
                                console.log(e);
                                return e;
                              })(),
                              uploadImage2: (() => {
                                const e = Constants['userpic1'];
                                console.log(e);
                                return e;
                              })(),
                              uploadImage3: (() => {
                                const e = Constants['userpic2'];
                                console.log(e);
                                return e;
                              })(),
                            }
                          );
                          navigation.navigate('HomeScreenCopyCopy');
                        } catch (err) {
                          console.error(err);
                        }
                      };
                      handler();
                    }}
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
                )}
              </>
            </View>
            {/* view2 */}
            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ViewStyles(theme)['view8'], {
                  width: 100,
                }),
                dimensions.width
              )}
            >
              {/* Submit */}
              <>
                {props.route?.params?.buttonType ?? '' ? null : (
                  <Button
                    onPress={() => {
                      const handler = async () => {
                        try {
                          await postStockTakingDetailsPostStockDetailsServicePOST.mutateAsync(
                            {
                              actualQuantity: (() => {
                                const e = ActualQuantity;
                                console.log(e);
                                return e;
                              })(),
                              binLocation: (() => {
                                const e = binLocation;
                                console.log(e);
                                return e;
                              })(),
                              buttonType: (() => {
                                const e = 'SUBMIT';
                                console.log(e);
                                return e;
                              })(),
                              dispQuantity: (() => {
                                const e = QtyDisprncy;
                                console.log(e);
                                return e;
                              })(),
                              quantity: (() => {
                                const e = CrtQty;
                                console.log(e);
                                return e;
                              })(),
                              remarks: (() => {
                                const e = Remarks;
                                console.log(e);
                                return e;
                              })(),
                              scheduleNo: (() => {
                                const e = props.route?.params?.scheduleno ?? '';
                                console.log(e);
                                return e;
                              })(),
                              uploadImage1: (() => {
                                const e = Constants['userpic'];
                                console.log(e);
                                return e;
                              })(),
                              uploadImage2: (() => {
                                const e = Constants['userpic1'];
                                console.log(e);
                                return e;
                              })(),
                              uploadImage3: (() => {
                                const e = Constants['userpic2'];
                                console.log(e);
                                return e;
                              })(),
                            }
                          );
                          navigation.navigate('HomeScreenCopyCopy');
                        } catch (err) {
                          console.error(err);
                        }
                      };
                      handler();
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
                )}
              </>
            </View>
          </View>
          {/* button */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Button view'],
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth({ width: 100 }, dimensions.width)}
            >
              {/* Close */}
              <>
                {!(
                  (props.route?.params?.buttonType ?? '') === undefined
                ) ? null : (
                  <Button
                    onPress={() => {
                      const handler = async () => {
                        try {
                          await postStockTakingDetailsPostStockDetailsServicePOST.mutateAsync(
                            {
                              buttonType: (() => {
                                const e = 'SAVE';
                                console.log(e);
                                return e;
                              })(),
                              scheduleNo: props.route?.params?.scheduleno ?? '',
                              uploadImage1: (() => {
                                const e = Constants['userpic'];
                                console.log(e);
                                return e;
                              })(),
                              uploadImage2: (() => {
                                const e = Constants['userpic1'];
                                console.log(e);
                                return e;
                              })(),
                              uploadImage3: (() => {
                                const e = Constants['userpic2'];
                                console.log(e);
                                return e;
                              })(),
                            }
                          );
                          navigation.navigate('HomeScreenCopyCopy');
                        } catch (err) {
                          console.error(err);
                        }
                      };
                      handler();
                    }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ButtonStyles(theme)['Button'],
                        {
                          color: theme.colors['Custom Color_3'],
                          fontFamily: 'Roboto_700Bold',
                          lineHeight: 20,
                          paddingTop: 10,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'Close\n'}
                  />
                )}
              </>
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(StockPage3Screen);
