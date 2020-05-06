import React from 'react';
import {
  View as RNView,
  ViewProps as RNViewProps,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { templates } from './templates';

export interface ViewProps extends RNViewProps {
  children: React.ReactNode;
  type?: 'default' | 'container';
  padding?: 'all' | 'horizontal' | 'vertical' | 'right' | 'none';
  borderTopBottom?: boolean;
}

export const View = ({
  type = 'default',
  padding = 'none',
  borderTopBottom = false,
  style,
  children,
  ...rest
}: ViewProps) => {
  const flattenedStyle = StyleSheet.flatten([
    templates.default,
    type === 'container' && templates.container,
    (padding === 'all' || padding === 'vertical') && templates.paddingVertical,
    (padding === 'all' || padding === 'horizontal') &&
      templates.paddingHorizontal,
    (padding === 'all' || padding === 'right') && templates.paddingRight,
    borderTopBottom && templates.borderTopBottom,
    style,
  ]);

  if (type === 'container') {
    return (
      <SafeAreaView style={flattenedStyle} {...rest}>
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <RNView style={flattenedStyle} {...rest}>
      {children}
    </RNView>
  );
};
