import { StyleSheet } from 'react-native';
import * as theme from '../../theme';

export const templates = StyleSheet.create({
  containerView: {
    flex: 1,
    paddingTop: theme.layout.baseMargin,
    paddingBottom: theme.layout.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundWhite,
  },
  titleView: {
    flex: 1,
    flexGrow: 3,
  },
  inputView: {
    flex: 1,
    flexGrow: 7,
  },
  inputViewNarrow: {
    flex: 1,
    flexGrow: 0,
    flexBasis: 60,
    alignItems: 'flex-end',
  },
});
