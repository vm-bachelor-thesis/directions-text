import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';
import { templates } from './templates';

export interface TextProps extends RNTextProps {
  children: React.ReactNode;
  type?: 'default' | 'header' | 'onGrayBackground';
  margin?:
    | 'all'
    | 'top'
    | 'bottom'
    | 'horizontal'
    | 'top+horizontal'
    | 'bottom+horizontal'
    | 'none';
}

export const Text = ({
  type = 'default',
  margin = 'none',
  style,
  children,
  ...rest
}: TextProps) => {
  const flattenedStyle = StyleSheet.flatten([
    templates.default,
    type === 'header' && templates.header,
    type === 'onGrayBackground' && templates.onGrayBackground,
    (margin === 'all' || margin === 'top' || margin === 'top+horizontal') &&
      templates.marginTop,
    (margin === 'all' ||
      margin === 'bottom' ||
      margin === 'bottom+horizontal') &&
      templates.marginBottom,
    (margin === 'all' ||
      margin === 'horizontal' ||
      margin === 'top+horizontal' ||
      margin === 'bottom+horizontal') &&
      templates.marginHorizontal,
    style,
  ]);
  return (
    <RNText style={flattenedStyle} {...rest}>
      {children}
    </RNText>
  );
};
