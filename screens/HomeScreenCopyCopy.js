import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GetStockTakingDetailsHistoryApi from '../apis/GetStockTakingDetailsHistoryApi.js';
import * as StockTakingDetailsApi from '../apis/StockTakingDetailsApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AccordionGroup,
  Icon,
  Link,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const HomeScreenCopyCopy = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [SCHEDULENO, setSCHEDULENO] = React.useState('');
  const [SelectedTab, setSelectedTab] = React.useState('jobs');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);
  const [inProgress, setInProgress] = React.useState(false);
  const [notYetStarted, setNotYetStarted] = React.useState(true);
  const [scheduleno, setScheduleno] = React.useState(false);
  const [showtext, setShowtext] = React.useState(false);

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      {/* Navigation view */}
      <View
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['Navigation view'],
            { paddingRight: 10 }
          ),
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
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              marginTop: 40,
            },
            dimensions.width
          )}
        >
          {/* Screen Heading */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
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
        {/* Middle Frame */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: 40,
              paddingBottom: 5,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
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
              }),
              dimensions.width
            )}
          >
            {'EN\n'}
          </Text>
        </View>
        {/* Right Frame */}
        <View
          style={StyleSheet.applyWidth(
            {
              marginTop: 40,
              paddingBottom: 5,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Touchable>
            <Icon size={24} name={'MaterialCommunityIcons/bell'} />
          </Touchable>
        </View>
        {/* Right Frame */}
        <View
          style={StyleSheet.applyWidth(
            {
              marginTop: 40,
              paddingBottom: 5,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ProfileScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {/* person */}
            <Icon size={24} name={'Ionicons/ios-person'} />
          </Touchable>
        </View>
      </View>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { marginBottom: 30, marginLeft: 20, marginRight: 20, marginTop: 30 },
          dimensions.width
        )}
      >
        {/* Page Title */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              alignSelf: 'flex-start',
              fontFamily: 'Roboto_700Bold',
              fontSize: 18,
            }),
            dimensions.width
          )}
        >
          {'Stock taking'}
        </Text>
      </View>
      {/* Tabs */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
          },
          dimensions.width
        )}
      >
        {/* My Jobs */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* Selected */}
          <>
            {!(SelectedTab === 'jobs') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 3,
                      borderColor: theme.colors['Primary'],
                      height: 43,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    size={24}
                    name={'MaterialCommunityIcons/clipboard-list'}
                    color={theme.colors['Primary']}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Primary'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'My jobs'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* Unselected */}
          <>
            {!(SelectedTab !== 'jobs') ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedTab('jobs');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_20'],
                      height: 43,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    size={24}
                    name={'MaterialCommunityIcons/clipboard-list'}
                    color={theme.colors['Primary']}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Custom Color_20'],
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 16,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'My jobs'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
        {/* Notifications */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* selected */}
          <>
            {!(SelectedTab === 'notifications') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 3,
                      borderColor: theme.colors['Primary'],
                      height: 43,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    size={24}
                    color={theme.colors['Primary']}
                    name={'MaterialCommunityIcons/bell'}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Primary'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Notifications'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* unselected */}
          <>
            {!(SelectedTab !== 'notifications') ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedTab('notifications');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_20'],
                      height: 43,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    size={24}
                    color={theme.colors['Primary']}
                    name={'MaterialCommunityIcons/bell'}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Custom Color_20'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Notifications'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
        {/* History */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* selected */}
          <>
            {!(SelectedTab === 'history') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 3,
                      borderColor: theme.colors['Primary'],
                      height: 43,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    size={24}
                    color={theme.colors['Primary']}
                    name={'MaterialCommunityIcons/clock-time-four'}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Primary'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'History'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* unselected */}
          <>
            {!(SelectedTab !== 'history') ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedTab('history');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_20'],
                      height: 43,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    size={24}
                    color={theme.colors['Primary']}
                    name={'MaterialCommunityIcons/clock'}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Custom Color_20'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'History'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
      </View>
      {/* My jobs */}
      <>
        {!(SelectedTab === 'jobs') ? null : (
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={true}
            keyboardShouldPersistTaps={'never'}
          >
            {/* My jobs */}
            <>
              {!(SelectedTab === 'jobs') ? null : (
                <ScrollView
                  contentContainerStyle={StyleSheet.applyWidth(
                    { paddingLeft: 24, paddingRight: 24, paddingTop: 16 },
                    dimensions.width
                  )}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  bounces={true}
                >
                  <StockTakingDetailsApi.FetchGetStockTakingDetailsPOST
                    refetchInterval={'3000ms'}
                    userName={(() => {
                      const e = props.route?.params?.userName ?? '';
                      console.log(e);
                      return e;
                    })()}
                    onData={fetchData => {
                      const handler = async () => {
                        try {
                          const stockTakingDetailsJSON =
                            await StockTakingDetailsApi.getStockTakingDetailsPOST(
                              Constants,
                              {
                                userName: (() => {
                                  const e = props.route?.params?.userName ?? '';
                                  console.log(e);
                                  return e;
                                })(),
                              }
                            );
                        } catch (err) {
                          console.error(err);
                        }
                      };
                      handler();
                    }}
                  >
                    {({
                      loading,
                      error,
                      data,
                      refetchGetStockTakingDetails,
                    }) => {
                      const fetchData = data;
                      if (!fetchData || loading) {
                        return <ActivityIndicator />;
                      }

                      if (error) {
                        return (
                          <Text style={{ textAlign: 'center' }}>
                            There was a problem fetching this data
                          </Text>
                        );
                      }

                      return (
                        <FlatList
                          renderItem={({ item }) => {
                            const listData = item;
                            return (
                              <FlashList
                                renderItem={({ item }) => {
                                  const flashListData = item;
                                  return (
                                    <>
                                      {/* FlashList 2 */}
                                      <FlashList
                                        renderItem={({ item }) => {
                                          const flashList2Data = item;
                                          return (
                                            <>
                                              {/* My jobs view */}
                                              <View
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    borderBottomWidth: 1,
                                                    borderColor:
                                                      theme.colors['Divider'],
                                                    borderLeftWidth: 1,
                                                    borderRadius: 20,
                                                    borderRightWidth: 1,
                                                    borderTopWidth: 1,
                                                    marginBottom: 18,
                                                    marginTop: 10,
                                                    paddingBottom: 10,
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    paddingTop: 10,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                <View
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      backgroundColor:
                                                        theme.colors[
                                                          'Custom #ffffff'
                                                        ],
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  <Text
                                                    style={StyleSheet.applyWidth(
                                                      StyleSheet.compose(
                                                        GlobalStyles.TextStyles(
                                                          theme
                                                        )['Text'],
                                                        {
                                                          fontFamily:
                                                            'Roboto_400Regular',
                                                          lineHeight: 20,
                                                          paddingBottom: 10,
                                                          paddingTop: 10,
                                                        }
                                                      ),
                                                      dimensions.width
                                                    )}
                                                  >
                                                    {flashListData?.verifyDate}
                                                  </Text>
                                                </View>

                                                <View
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      backgroundColor:
                                                        theme.colors[
                                                          'Custom #ffffff'
                                                        ],
                                                      borderColor:
                                                        theme.colors['Divider'],
                                                      borderTopWidth: 1,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  <Text
                                                    style={StyleSheet.applyWidth(
                                                      StyleSheet.compose(
                                                        GlobalStyles.TextStyles(
                                                          theme
                                                        )['Text'],
                                                        {
                                                          fontFamily:
                                                            'Roboto_400Regular',
                                                          lineHeight: 20,
                                                          paddingBottom: 10,
                                                          paddingTop: 10,
                                                        }
                                                      ),
                                                      dimensions.width
                                                    )}
                                                  >
                                                    {listData?.storeOffice}
                                                  </Text>
                                                </View>

                                                <View
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      backgroundColor:
                                                        theme.colors[
                                                          'Custom #ffffff'
                                                        ],
                                                      borderColor:
                                                        theme.colors['Divider'],
                                                      borderTopWidth: 1,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  <AccordionGroup
                                                    style={StyleSheet.applyWidth(
                                                      StyleSheet.compose(
                                                        GlobalStyles.AccordionGroupStyles(
                                                          theme
                                                        )['Accordion'],
                                                        {
                                                          fontFamily:
                                                            'Roboto_400Regular',
                                                          fontSize: 14,
                                                          lineHeight: 20,
                                                          paddingBottom: 10,
                                                          paddingTop: 10,
                                                        }
                                                      ),
                                                      dimensions.width
                                                    )}
                                                    label={listData?.scheduleNo}
                                                    caretColor={
                                                      theme.colors['Strong']
                                                    }
                                                    closedColor={
                                                      theme.colors['Strong']
                                                    }
                                                    openColor={
                                                      theme.colors['Strong']
                                                    }
                                                    caretSize={18}
                                                    iconSize={18}
                                                  >
                                                    {/* Materials view */}
                                                    <View
                                                      style={StyleSheet.applyWidth(
                                                        {
                                                          borderColor:
                                                            theme.colors[
                                                              'Divider'
                                                            ],
                                                          borderTopWidth: 1,
                                                        },
                                                        dimensions.width
                                                      )}
                                                    >
                                                      <View
                                                        style={StyleSheet.applyWidth(
                                                          {
                                                            flexDirection:
                                                              'row',
                                                          },
                                                          dimensions.width
                                                        )}
                                                      >
                                                        <Touchable>
                                                          <>
                                                            {flashList2Data?.buttonType ? null : (
                                                              <Icon
                                                                style={StyleSheet.applyWidth(
                                                                  {
                                                                    marginRight: 8,
                                                                    marginTop: 8,
                                                                  },
                                                                  dimensions.width
                                                                )}
                                                                name={
                                                                  'MaterialCommunityIcons/clock-outline'
                                                                }
                                                                size={20}
                                                                color={
                                                                  theme.colors[
                                                                    'Strong'
                                                                  ]
                                                                }
                                                              />
                                                            )}
                                                          </>
                                                        </Touchable>

                                                        <Touchable>
                                                          <>
                                                            {!(
                                                              flashList2Data?.buttonType ===
                                                              'SAVE'
                                                            ) ? null : (
                                                              <Icon
                                                                style={StyleSheet.applyWidth(
                                                                  {
                                                                    marginRight: 8,
                                                                    marginTop: 8,
                                                                  },
                                                                  dimensions.width
                                                                )}
                                                                name={
                                                                  'MaterialCommunityIcons/clock-outline'
                                                                }
                                                                size={20}
                                                                color={
                                                                  theme.colors[
                                                                    'GetFit Orange'
                                                                  ]
                                                                }
                                                              />
                                                            )}
                                                          </>
                                                        </Touchable>

                                                        <Touchable>
                                                          <>
                                                            {!(
                                                              flashList2Data?.buttonType ===
                                                              'SUBMIT'
                                                            ) ? null : (
                                                              <Icon
                                                                style={StyleSheet.applyWidth(
                                                                  {
                                                                    marginRight: 8,
                                                                    marginTop: 8,
                                                                  },
                                                                  dimensions.width
                                                                )}
                                                                name={
                                                                  'MaterialCommunityIcons/clock-outline'
                                                                }
                                                                size={20}
                                                                color={
                                                                  theme.colors[
                                                                    'Custom Color_11'
                                                                  ]
                                                                }
                                                              />
                                                            )}
                                                          </>
                                                        </Touchable>
                                                        <Link
                                                          onPress={() => {
                                                            try {
                                                              const stockscheduledata =
                                                                setGlobalVariableValue(
                                                                  {
                                                                    key: 'stockscheduledata',
                                                                    value:
                                                                      flashListData?.stockBinLocation,
                                                                  }
                                                                );
                                                              navigation.navigate(
                                                                'StockPage2Screen',
                                                                {
                                                                  schedule:
                                                                    flashListData?.verifyDate,
                                                                  storeoffice:
                                                                    listData?.storeOffice,
                                                                  materialname:
                                                                    flashListData?.materialName,
                                                                  materialcode:
                                                                    flashListData?.materialCode,
                                                                  locationbins:
                                                                    stockscheduledata,
                                                                  scheduleno:
                                                                    listData?.scheduleNo,
                                                                }
                                                              );
                                                            } catch (err) {
                                                              console.error(
                                                                err
                                                              );
                                                            }
                                                          }}
                                                          style={StyleSheet.applyWidth(
                                                            StyleSheet.compose(
                                                              GlobalStyles.LinkStyles(
                                                                theme
                                                              )['Link'],
                                                              {
                                                                color:
                                                                  theme.colors[
                                                                    'Strong'
                                                                  ],
                                                                flex: 1,
                                                                fontFamily:
                                                                  'Roboto_400Regular',
                                                                fontSize: 14,
                                                                lineHeight: 20,
                                                                paddingBottom: 5,
                                                                paddingTop: 5,
                                                              }
                                                            ),
                                                            dimensions.width
                                                          )}
                                                          title={`${flashListData?.materialCode}  ${flashListData?.uom}  ${flashListData?.totalQuantity}
${flashListData?.materialName}

`}
                                                        />
                                                      </View>
                                                    </View>
                                                  </AccordionGroup>
                                                </View>
                                              </View>
                                            </>
                                          );
                                        }}
                                        data={flashListData?.stockBinLocation}
                                        listKey={JSON.stringify(
                                          flashListData?.stockBinLocation
                                        )}
                                        keyExtractor={flashList2Data =>
                                          flashList2Data?.id ||
                                          flashList2Data?.uuid ||
                                          JSON.stringify(flashList2Data)
                                        }
                                        estimatedItemSize={50}
                                        numColumns={1}
                                        onEndReachedThreshold={0.5}
                                        showsHorizontalScrollIndicator={true}
                                        showsVerticalScrollIndicator={true}
                                      />
                                    </>
                                  );
                                }}
                                data={listData?.stockTakingSchedule}
                                listKey={JSON.stringify(
                                  listData?.stockTakingSchedule
                                )}
                                keyExtractor={flashListData =>
                                  flashListData?.id ||
                                  flashListData?.uuid ||
                                  JSON.stringify(flashListData)
                                }
                                estimatedItemSize={50}
                                onEndReachedThreshold={0.5}
                                showsHorizontalScrollIndicator={true}
                                showsVerticalScrollIndicator={true}
                              />
                            );
                          }}
                          data={fetchData?.message?.data}
                          listKey={'WJf5cvZA'}
                          keyExtractor={listData =>
                            listData?.id ||
                            listData?.uuid ||
                            JSON.stringify(listData)
                          }
                          numColumns={1}
                          onEndReachedThreshold={0.5}
                          showsHorizontalScrollIndicator={true}
                          showsVerticalScrollIndicator={true}
                        />
                      );
                    }}
                  </StockTakingDetailsApi.FetchGetStockTakingDetailsPOST>
                </ScrollView>
              )}
            </>
          </KeyboardAwareScrollView>
        )}
      </>
      {/* Notifications */}
      <>
        {!(SelectedTab === 'notifications') ? null : (
          <ScrollView
            contentContainerStyle={StyleSheet.applyWidth(
              {
                alignItems: 'stretch',
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
            <View
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 20,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  marginBottom: 18,
                  marginTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              <AccordionGroup
                style={StyleSheet.applyWidth(
                  GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                  dimensions.width
                )}
                label={'14-04-2023'}
                caretSize={24}
                iconSize={24}
                closedColor={theme.colors['Strong']}
                caretColor={theme.colors['Strong']}
                openColor={theme.colors['Strong']}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Custom #ffffff'],
                      borderColor: theme.colors['Divider'],
                      borderTopWidth: 1,
                      paddingBottom: 10,
                      paddingTop: 10,
                    },
                    dimensions.width
                  )}
                >
                  <>
                    {showtext ? null : (
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontFamily: 'Roboto_400Regular',
                              paddingBottom: 10,
                              paddingTop: 10,
                            }
                          ),
                          dimensions.width
                        )}
                        ellipsizeMode={'tail'}
                        numberOfLines={1}
                      >
                        {
                          'SCH_1001 has to be completed before month end and it has to be approved'
                        }
                      </Text>
                    )}
                  </>
                  <>
                    {!showtext ? null : (
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontFamily: 'Roboto_400Regular',
                              paddingBottom: 10,
                              paddingTop: 10,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {
                          'SCH_1001 has to be completed before month end and it has to be approved'
                        }
                      </Text>
                    )}
                  </>
                  <>
                    {showtext ? null : (
                      <Link
                        onPress={() => {
                          try {
                            setShowtext(!showtext);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.LinkStyles(theme)['Link'],
                            {
                              fontFamily: 'Roboto_400Regular',
                              textAlign: 'right',
                            }
                          ),
                          dimensions.width
                        )}
                        title={'show more'}
                      />
                    )}
                  </>
                  <>
                    {!showtext ? null : (
                      <Link
                        onPress={() => {
                          try {
                            setShowtext(!showtext);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.LinkStyles(theme)['Link'],
                            {
                              fontFamily: 'Roboto_400Regular',
                              textAlign: 'right',
                            }
                          ),
                          dimensions.width
                        )}
                        title={'show less'}
                      />
                    )}
                  </>
                </View>
              </AccordionGroup>
            </View>
          </ScrollView>
        )}
      </>
      {/* History view */}
      <>
        {!(SelectedTab === 'history') ? null : (
          <ScrollView
            contentContainerStyle={StyleSheet.applyWidth(
              { paddingLeft: 24, paddingRight: 24, paddingTop: 16 },
              dimensions.width
            )}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            {/* fetch */}
            <GetStockTakingDetailsHistoryApi.FetchStockTakingDetailsHistoryPOST
              refetchInterval={'3000ms'}
            >
              {({ loading, error, data, refetchStockTakingDetailsHistory }) => {
                const fetchData = data;
                if (!fetchData || loading) {
                  return <ActivityIndicator />;
                }

                if (error) {
                  return (
                    <Text style={{ textAlign: 'center' }}>
                      There was a problem fetching this data
                    </Text>
                  );
                }

                return (
                  <FlatList
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <FlashList
                          renderItem={({ item }) => {
                            const flashListData = item;
                            return (
                              <>
                                {/* FlashList 2 */}
                                <FlashList
                                  renderItem={({ item }) => {
                                    const flashList2Data = item;
                                    return (
                                      <>
                                        {/* History view */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              borderBottomWidth: 1,
                                              borderColor:
                                                theme.colors['Divider'],
                                              borderLeftWidth: 1,
                                              borderRadius: 20,
                                              borderRightWidth: 1,
                                              borderTopWidth: 1,
                                              marginBottom: 18,
                                              marginTop: 10,
                                              paddingBottom: 10,
                                              paddingLeft: 10,
                                              paddingRight: 10,
                                              paddingTop: 10,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                backgroundColor:
                                                  theme.colors[
                                                    'Custom #ffffff'
                                                  ],
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            <Text
                                              style={StyleSheet.applyWidth(
                                                StyleSheet.compose(
                                                  GlobalStyles.TextStyles(
                                                    theme
                                                  )['Text'],
                                                  {
                                                    fontFamily:
                                                      'Roboto_400Regular',
                                                    lineHeight: 20,
                                                    paddingBottom: 10,
                                                    paddingTop: 10,
                                                  }
                                                ),
                                                dimensions.width
                                              )}
                                            >
                                              {flashListData?.verifyDate}
                                            </Text>
                                          </View>

                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                backgroundColor:
                                                  theme.colors[
                                                    'Custom #ffffff'
                                                  ],
                                                borderColor:
                                                  theme.colors['Divider'],
                                                borderTopWidth: 1,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            <Text
                                              style={StyleSheet.applyWidth(
                                                StyleSheet.compose(
                                                  GlobalStyles.TextStyles(
                                                    theme
                                                  )['Text'],
                                                  {
                                                    fontFamily:
                                                      'Roboto_400Regular',
                                                    lineHeight: 20,
                                                    paddingBottom: 10,
                                                    paddingTop: 10,
                                                  }
                                                ),
                                                dimensions.width
                                              )}
                                            >
                                              {listData?.storeOffice}
                                            </Text>
                                          </View>

                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                backgroundColor:
                                                  theme.colors[
                                                    'Custom #ffffff'
                                                  ],
                                                borderColor:
                                                  theme.colors['Divider'],
                                                borderTopWidth: 1,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            <AccordionGroup
                                              style={StyleSheet.applyWidth(
                                                StyleSheet.compose(
                                                  GlobalStyles.AccordionGroupStyles(
                                                    theme
                                                  )['Accordion'],
                                                  {
                                                    fontFamily:
                                                      'Roboto_400Regular',
                                                    fontSize: 14,
                                                    lineHeight: 20,
                                                    paddingBottom: 10,
                                                    paddingTop: 10,
                                                  }
                                                ),
                                                dimensions.width
                                              )}
                                              label={listData?.scheduleNo}
                                              caretColor={
                                                theme.colors['Strong']
                                              }
                                              closedColor={
                                                theme.colors['Strong']
                                              }
                                              openColor={theme.colors['Strong']}
                                              caretSize={18}
                                              iconSize={18}
                                            >
                                              {/* Materials view */}
                                              <View
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    borderColor:
                                                      theme.colors['Divider'],
                                                    borderTopWidth: 1,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                <View
                                                  style={StyleSheet.applyWidth(
                                                    { flexDirection: 'row' },
                                                    dimensions.width
                                                  )}
                                                >
                                                  <Touchable />
                                                  <Link
                                                    onPress={() => {
                                                      try {
                                                        const stockscheduledata =
                                                          setGlobalVariableValue(
                                                            {
                                                              key: 'stockscheduledata',
                                                              value:
                                                                flashListData?.stockBinLocation,
                                                            }
                                                          );
                                                        navigation.navigate(
                                                          'StockPage2Screen',
                                                          {
                                                            schedule:
                                                              flashListData?.verifyDate,
                                                            storeoffice:
                                                              listData?.storeOffice,
                                                            materialname:
                                                              flashListData?.materialName,
                                                            materialcode:
                                                              flashListData?.materialCode,
                                                            binlocation:
                                                              flashList2Data?.binLocation,
                                                            currentquantity:
                                                              flashList2Data?.quantity,
                                                            materialtype:
                                                              flashList2Data?.type,
                                                            scheduleno:
                                                              listData?.scheduleNo,
                                                            quantityDispreancy:
                                                              flashList2Data?.discrepancyQuantity,
                                                            remarks:
                                                              flashList2Data?.remarks,
                                                            buttonType:
                                                              flashList2Data?.buttonType,
                                                            actualQty:
                                                              flashList2Data?.actualQuantity,
                                                          }
                                                        );
                                                      } catch (err) {
                                                        console.error(err);
                                                      }
                                                    }}
                                                    style={StyleSheet.applyWidth(
                                                      StyleSheet.compose(
                                                        GlobalStyles.LinkStyles(
                                                          theme
                                                        )['Link'],
                                                        {
                                                          color:
                                                            theme.colors[
                                                              'Strong'
                                                            ],
                                                          flex: 1,
                                                          fontFamily:
                                                            'Roboto_400Regular',
                                                          fontSize: 14,
                                                          lineHeight: 20,
                                                          paddingBottom: 5,
                                                          paddingTop: 5,
                                                        }
                                                      ),
                                                      dimensions.width
                                                    )}
                                                    title={`${flashListData?.materialCode}  ${flashListData?.uom}  ${flashListData?.totalQuantity}
${flashListData?.materialName}

`}
                                                  />
                                                </View>
                                              </View>
                                            </AccordionGroup>
                                          </View>
                                        </View>
                                      </>
                                    );
                                  }}
                                  data={flashListData?.stockBinLocation}
                                  listKey={JSON.stringify(
                                    flashListData?.stockBinLocation
                                  )}
                                  keyExtractor={flashList2Data =>
                                    flashList2Data?.id ||
                                    flashList2Data?.uuid ||
                                    JSON.stringify(flashList2Data)
                                  }
                                  estimatedItemSize={50}
                                  numColumns={1}
                                  onEndReachedThreshold={0.5}
                                  showsHorizontalScrollIndicator={true}
                                  showsVerticalScrollIndicator={true}
                                />
                              </>
                            );
                          }}
                          data={listData?.stockTakingSchedule}
                          listKey={JSON.stringify(
                            listData?.stockTakingSchedule
                          )}
                          keyExtractor={flashListData =>
                            flashListData?.id ||
                            flashListData?.uuid ||
                            JSON.stringify(flashListData)
                          }
                          estimatedItemSize={50}
                          onEndReachedThreshold={0.5}
                          showsHorizontalScrollIndicator={true}
                          showsVerticalScrollIndicator={true}
                        />
                      );
                    }}
                    data={fetchData?.message?.data}
                    listKey={'GJGygR7w'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                );
              }}
            </GetStockTakingDetailsHistoryApi.FetchStockTakingDetailsHistoryPOST>
          </ScrollView>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreenCopyCopy);
