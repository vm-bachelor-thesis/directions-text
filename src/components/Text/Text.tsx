import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';
import { templates } from './templates';

export interface TextProps extends RNTextProps {
  children: React.ReactNode;
  type?: 'default' | 'header';
}

export const Text = ({
  type = 'default',
  style,
  children,
  ...rest
}: TextProps) => {
  const flattenedStyle = StyleSheet.flatten([
    templates.default,
    type === 'header' && templates.header,
    style,
  ]);
  return (
    <RNText style={flattenedStyle} {...rest}>
      {children}
    </RNText>
  );
};
