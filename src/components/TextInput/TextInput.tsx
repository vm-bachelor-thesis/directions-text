import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from 'react-native';
import { templates } from './templates';
import * as theme from '../../theme';

export interface TextInputProps extends RNTextInputProps {
  placeholder: string;
}

export const TextInput = ({ placeholder, style, ...rest }: TextInputProps) => {
  const flattenedStyle = StyleSheet.flatten([templates.default, style]);

  return (
    <RNTextInput
      style={flattenedStyle}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.placeholder}
      {...rest}
    />
  );
};
