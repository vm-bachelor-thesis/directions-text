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
    marginBottom: theme.layout.baseMargin,
  },
  onGrayBackground: {
    color: theme.colors.textOnGrayBackground,
    fontSize: theme.layout.fontSize * 0.9,
  },
  marginTop: {
    marginTop: theme.layout.baseMargin,
  },
  marginBottom: {
    marginBottom: theme.layout.baseMargin,
  },
  marginHorizontal: {
    marginHorizontal: theme.layout.baseMargin,
  },
});
