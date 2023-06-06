import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AccordionGroup,
  Icon,
  Link,
  NumberInput,
  ScreenContainer,
  TabView,
  TabViewItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const HomeScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const myFunctionName = ActQty => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) a

// Type the code for the body of your function or hook here.
// Functions can be triggered via Button/Touchable actions.
// Hooks are run per ReactJS rules.

/* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    //console.log("crtqty" + CrtQty)
    console.log('actqty' + ActQty);
    // console.log("totalqty" + CrtQty - ActQty)
    // setQtyDisprncy(CrtQty - ActQty)

    setQtyDisprncy(26 - ActQty);

    return CrtQty - ActQty;
  };

  const { theme } = props;

  const [QtyDisprncy, setQtyDisprncy] = React.useState(0);
  const [actQty, setActQty] = React.useState(0);
  const [crtQty, setCrtQty] = React.useState(0);
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Background'] },
        dimensions.width
      )}
      scrollable={false}
      hasSafeArea={false}
    >
      {/* Navigation view */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'stretch',
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        {/* Left Frame */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', marginLeft: 30, marginTop: 40 },
            dimensions.width
          )}
        >
          <Touchable />
          <Icon size={24} name={'Foundation/align-justify'} />
        </View>
        {/* Middle Frame */}
        <View
          style={StyleSheet.applyWidth(
            {
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 40,
            },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text'],
              dimensions.width
            )}
          >
            {null}
          </Text>
        </View>
        {/* Right Frame */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', marginRight: 30, marginTop: 40 },
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

      <View
        style={StyleSheet.applyWidth(
          { alignContent: 'center' },
          dimensions.width
        )}
      >
        <TabView
          style={StyleSheet.applyWidth(
            { flex: 1, marginTop: 40, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
          tabBarPosition={'top'}
          keyboardDismissMode={'auto'}
          swipeEnabled={true}
          activeColor={theme.colors.primary}
          pressColor={theme.colors.primary}
          indicatorColor={theme.colors.primary}
          tabsBackgroundColor={theme.colors.background}
        >
          <TabViewItem
            style={StyleSheet.applyWidth(
              GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
              dimensions.width
            )}
            title={'My Jobs'}
            icon={'Octicons/tasklist'}
          >
            {/* My Jobs */}
            <>{!'My Jobs' ? null : <View />}</>
            {/* Stock Frame1 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  justifyContent: 'space-around',
                  marginRight: 30,
                  marginTop: 30,
                },
                dimensions.width
              )}
            >
              {/* Stock view */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'Roboto_700Bold',
                      padding: 5,
                    }),
                    dimensions.width
                  )}
                >
                  {'14-04-23 |Stock Taking 1'}
                </Text>
                {/* Priority */}
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { marginLeft: 40 },
                      dimensions.width
                    )}
                    size={24}
                    name={'Ionicons/ios-golf-outline'}
                    color={theme.colors['Error']}
                  />
                </View>
                {/* Notification view */}
                <View>
                  <Icon
                    style={StyleSheet.applyWidth(
                      { marginLeft: 40 },
                      dimensions.width
                    )}
                    size={24}
                    name={'FontAwesome/bell-o'}
                    color={theme.colors['Custom Color_13']}
                  />
                </View>
              </View>

              <View>
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'Roboto_400Regular',
                      paddingTop: 2,
                    }),
                    dimensions.width
                  )}
                >
                  {' Visakhapatnam-HQ,Visakhapatnam\n\n'}
                </Text>
              </View>
              {/* Materials view */}
              <View>
                {/* Material 1 */}
                <Link
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'], {
                      alignSelf: 'auto',
                    }),
                    dimensions.width
                  )}
                  title={'Material 1\n'}
                />
                {/* Material 2 */}
                <Link
                  style={StyleSheet.applyWidth(
                    GlobalStyles.LinkStyles(theme)['Link'],
                    dimensions.width
                  )}
                  title={'Material 2\n'}
                />
                {/* Material 3 */}
                <Link
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'], {
                      fontFamily: 'Roboto_400Regular',
                    }),
                    dimensions.width
                  )}
                  title={'Material 3'}
                />
                <AccordionGroup
                  style={StyleSheet.applyWidth(
                    GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                    dimensions.width
                  )}
                  label={'View more'}
                  caretSize={24}
                  iconSize={24}
                  icon={'Feather/more-horizontal'}
                >
                  {/* Material 4 */}
                  <Link
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.LinkStyles(theme)['Link'],
                        { fontFamily: 'Roboto_400Regular' }
                      ),
                      dimensions.width
                    )}
                    title={'Material 4\n'}
                  />
                </AccordionGroup>
              </View>
            </View>
            {/* Stock Frame2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  justifyContent: 'space-around',
                  marginRight: 30,
                  marginTop: 30,
                },
                dimensions.width
              )}
            >
              {/* Stock view */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'Roboto_700Bold',
                      padding: 5,
                    }),
                    dimensions.width
                  )}
                >
                  {'14-04-23 |Stock Taking 2'}
                </Text>
                {/* Priority */}
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { marginLeft: 40 },
                      dimensions.width
                    )}
                    size={24}
                    name={'Ionicons/ios-golf-outline'}
                    color={theme.colors['Custom Color_11']}
                  />
                </View>
                {/* Notification view */}
                <View>
                  <Icon
                    style={StyleSheet.applyWidth(
                      { marginLeft: 40 },
                      dimensions.width
                    )}
                    size={24}
                    name={'FontAwesome/bell-o'}
                    color={theme.colors['Custom Color_13']}
                  />
                </View>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'Roboto_400Regular',
                      paddingTop: 2,
                    }),
                    dimensions.width
                  )}
                >
                  {'Hyderabad-HQ,Hyderabad\n\n'}
                </Text>
              </View>
              {/* Materials view */}
              <View>
                {/* Material 1 */}
                <Link
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'], {
                      alignSelf: 'auto',
                    }),
                    dimensions.width
                  )}
                  title={'Material 1\n'}
                />
                {/* Material 2 */}
                <Link
                  style={StyleSheet.applyWidth(
                    GlobalStyles.LinkStyles(theme)['Link'],
                    dimensions.width
                  )}
                  title={'Material 2\n'}
                />
                {/* Material 3 */}
                <Link
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'], {
                      fontFamily: 'Roboto_400Regular',
                    }),
                    dimensions.width
                  )}
                  title={'Material 3'}
                />
                <AccordionGroup
                  style={StyleSheet.applyWidth(
                    GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                    dimensions.width
                  )}
                  label={'View more'}
                  caretSize={24}
                  iconSize={24}
                  icon={'Feather/more-horizontal'}
                >
                  {/* Material 4 */}
                  <Link
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.LinkStyles(theme)['Link'],
                        { fontFamily: 'Roboto_400Regular' }
                      ),
                      dimensions.width
                    )}
                    title={'Material 4\n'}
                  />
                  {/* Material 5 */}
                  <Link
                    style={StyleSheet.applyWidth(
                      GlobalStyles.LinkStyles(theme)['Link'],
                      dimensions.width
                    )}
                    title={'Material 5'}
                  />
                </AccordionGroup>
              </View>
            </View>
          </TabViewItem>
          {/* Tab View Item 2 */}
          <TabViewItem
            style={StyleSheet.applyWidth(
              GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
              dimensions.width
            )}
            title={'Notifications'}
            icon={'MaterialCommunityIcons/bell-ring'}
          >
            {/* Notifications */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', justifyContent: 'space-around' },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['BG Gray'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Custom #d3536d'],
                    borderLeftWidth: 1,
                    borderRadius: 12,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    marginTop: 30,
                  },
                  dimensions.width
                )}
              >
                <Touchable>
                  <Icon
                    size={24}
                    name={'AntDesign/notification'}
                    color={theme.colors['Error']}
                  />
                </Touchable>

                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { color: theme.colors['Error'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Stock Taking 1 has to be complete before 12-05-23'}
                  </Text>
                </View>
              </View>
            </View>
          </TabViewItem>
          {/* Tab View Item 3 */}
          <TabViewItem
            style={StyleSheet.applyWidth(
              GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
              dimensions.width
            )}
            title={'History'}
            icon={'MaterialCommunityIcons/history'}
          >
            {/* History */}
            <View />
            {/* Stock Frame3 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  justifyContent: 'space-around',
                  marginRight: 30,
                  marginTop: 30,
                },
                dimensions.width
              )}
            >
              {/* Stock view */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'Roboto_700Bold',
                      padding: 5,
                    }),
                    dimensions.width
                  )}
                >
                  {'14-04-23 |Stock Taking 1'}
                </Text>
                {/* Tasks */}
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'flex-end',
                          color: theme.colors['Custom Color_11'],
                          flex: 1,
                          fontFamily: 'Roboto_400Regular',
                          marginLeft: 80,
                          padding: 5,
                          textAlign: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Completed'}
                  </Text>
                </View>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'Roboto_400Regular',
                      paddingTop: 2,
                    }),
                    dimensions.width
                  )}
                >
                  {'Visakhapatnam-HQ,Visakhapatnam\n\n'}
                </Text>
              </View>
              {/* Materials view */}
              <View>
                {/* Material 1 */}
                <Link
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'], {
                      alignSelf: 'auto',
                    }),
                    dimensions.width
                  )}
                  title={'Material 1\n'}
                />
                {/* Material 2 */}
                <Link
                  style={StyleSheet.applyWidth(
                    GlobalStyles.LinkStyles(theme)['Link'],
                    dimensions.width
                  )}
                  title={'Material 2\n'}
                />
                {/* Material 3 */}
                <Link
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'], {
                      fontFamily: 'Roboto_400Regular',
                    }),
                    dimensions.width
                  )}
                  title={'Material 3'}
                />
                <AccordionGroup
                  style={StyleSheet.applyWidth(
                    GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                    dimensions.width
                  )}
                  label={'View more'}
                  caretSize={24}
                  iconSize={24}
                  icon={'Feather/more-horizontal'}
                >
                  <Link
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.LinkStyles(theme)['Link'],
                        { fontFamily: 'Roboto_400Regular' }
                      ),
                      dimensions.width
                    )}
                    title={'Material 4\n'}
                  />
                  {/* Link 2 */}
                  <Link
                    style={StyleSheet.applyWidth(
                      GlobalStyles.LinkStyles(theme)['Link'],
                      dimensions.width
                    )}
                    title={'Material 5'}
                  />
                </AccordionGroup>
              </View>
            </View>
          </TabViewItem>
        </TabView>
        <NumberInput
          onChangeText={newNumberInputValue => {
            const numberInputValue = newNumberInputValue;
            try {
              const valueqEig7xa5 = newNumberInputValue;
              setActQty(valueqEig7xa5);
              const actQty = valueqEig7xa5;
              const qtydispreancy = myFunctionName(actQty);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            GlobalStyles.NumberInputStyles(theme)['Number Input'],
            dimensions.width
          )}
          value={numberInputValue}
          editable={true}
          placeholder={'Enter a number...'}
        />
        <Text
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text'],
            dimensions.width
          )}
        >
          {'26\n'}
        </Text>
        {/* Text 2 */}
        <Text
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text'],
            dimensions.width
          )}
        >
          {'total:'}
          {QtyDisprncy}
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
