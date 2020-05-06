import { StyleSheet } from 'react-native';
import * as theme from '../../theme';

export const calculateHeight = (lines: number) =>
  lines * theme.layout.fontSize + theme.layout.baseMargin / 1.5;

export const templates = StyleSheet.create({
  default: {
    fontSize: theme.layout.fontSize,
    lineHeight: theme.layout.lineHeight,
    color: theme.colors.text,
    paddingTop: theme.layout.baseMargin / 3,
    paddingBottom: theme.layout.baseMargin / 3,
  },
});
