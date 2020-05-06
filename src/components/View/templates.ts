import { StyleSheet } from 'react-native';
import * as theme from '../../theme';

export const templates = StyleSheet.create({
  default: {
    backgroundColor: theme.colors.backgroundWhite,
  },
  padding: {
    paddingLeft: theme.layout.baseMargin,
    paddingRight: theme.layout.baseMargin,
  },
  borderTopBottom: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.viewBorder,
  },
  container: {
    flex: 1,
    paddingLeft: theme.layout.baseMargin,
    paddingRight: theme.layout.baseMargin,
    backgroundColor: theme.colors.backgroundGray,
  },
  safeAreaViewComponent: {
    flex: 1,
  },
  scrollViewComponent: {
    flex: 1,
  },
});
