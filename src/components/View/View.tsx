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
  padding?: boolean;
  borderTopBottom?: boolean;
  safeMargin?: boolean;
  scrolling?: boolean;
}

export const View = ({
  type = 'default',
  padding = false,
  borderTopBottom = false,
  style,
  children,
  ...rest
}: ViewProps) => {
  const flattenedStyle = StyleSheet.flatten([
    templates.default,
    type === 'container' && templates.container,
    padding && templates.padding,
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
