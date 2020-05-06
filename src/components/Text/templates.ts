import { StyleSheet } from 'react-native';
import * as theme from '../../theme';

export const templates = StyleSheet.create({
  default: {
    color: theme.colors.text,
    fontSize: theme.layout.fontSize,
    lineHeight: theme.layout.lineHeight,
  },
  header: {
    fontSize: theme.layout.headerFontSize,
    lineHeight: theme.layout.headerLineHeight,
    fontWeight: '600',
    margin: theme.layout.baseMargin,
    marginBottom: theme.layout.baseMargin * 2,
  },
});
