import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const AccordionGroupStyles = theme =>
  StyleSheet.create({ Accordion: { fontSize: 16 } });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: { fontFamily: 'System', fontWeight: '700', textAlign: 'center' },
  });

export const ViewStyles = theme =>
  StyleSheet.create({
    'Button view': {
      alignSelf: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    'History view': {
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
    'Main Menu': {
      alignItems: 'baseline',
      alignSelf: 'auto',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
    },
    'Navigation view': {
      alignItems: 'stretch',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    'Notifications view': {
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
    navi: {
      alignItems: 'stretch',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    tabs: {
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
    },
    view: {
      borderColor: theme.colors['Divider'],
      borderTopWidth: 1,
      paddingTop: 10,
    },
    'view 2': {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginBottom: 80,
      marginTop: 80,
      paddingLeft: 24,
      paddingRight: 24,
    },
    view1: {
      alignItems: 'stretch',
      backgroundColor: theme.colors['Custom #ffffff'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 20,
      borderRightWidth: 1,
      borderTopWidth: 1,
      marginBottom: 18,
      marginTop: 10,
      paddingTop: 10,
    },
    view111: { flexDirection: 'row', justifyContent: 'space-evenly' },
    view14: {
      borderColor: theme.colors['Divider'],
      borderTopWidth: 1,
      flexDirection: 'row',
      paddingTop: 10,
    },
    view2: { backgroundColor: theme.colors['Custom #ffffff'] },
    view5: {
      borderColor: theme.colors['Divider'],
      borderTopWidth: 1,
      paddingTop: 10,
    },
    view6: {
      borderColor: theme.colors['Divider'],
      borderTopWidth: 1,
      paddingTop: 10,
    },
    view7: {
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
  });

export const DividerStyles = theme => StyleSheet.create({});

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { minHeight: 40 } });

export const ImageStyles = theme => StyleSheet.create({});

export const ImageBackgroundStyles = theme =>
  StyleSheet.create({ 'Image Background': { height: '100%', width: '100%' } });

export const LinkStyles = theme => StyleSheet.create({});

export const ScrollViewStyles = theme =>
  StyleSheet.create({
    'My history view': { paddingLeft: 24, paddingRight: 24, paddingTop: 16 },
  });

export const NumberInputStyles = theme =>
  StyleSheet.create({
    'Number Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const TabViewItemStyles = theme => StyleSheet.create({});

export const TextStyles = theme => StyleSheet.create({});

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Area': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopWidth: 1,
    },
    'Text Input': { borderColor: theme.colors.divider },
  });

export const TouchableStyles = theme =>
  StyleSheet.create({ touchable: { width: '100%' } });
