import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { templates } from './templates';

export interface DividerProps {
  style?: StyleProp<ViewStyle>;
}

export const Divider = ({ style, ...rest }: DividerProps) => {
  const flattenedStyle = StyleSheet.flatten([templates.default, style]);

  return <View style={flattenedStyle} {...rest} />;
};
