import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from 'react-native';
import { templates, calculateHeight } from './templates';
import * as theme from '../../theme';

export interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  lines?: number;
}

export const TextInput = ({
  placeholder,
  lines = 1,
  style,
  ...rest
}: TextInputProps) => {
  const height = lines > 1 ? calculateHeight(lines) : 'auto';
  const flattenedStyle = StyleSheet.flatten([
    templates.default,
    { height: height },
    style,
  ]);

  return (
    <RNTextInput
      style={flattenedStyle}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.placeholder}
      multiline={lines > 1}
      {...rest}
    />
  );
};
