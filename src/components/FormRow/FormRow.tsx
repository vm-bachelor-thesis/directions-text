import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../';
import { templates } from './templates';

export interface FormRowProps {
  title: string;
  inputComponent: React.ReactNode;
  wideTitle?: boolean;
}

export const FormRow = ({
  title,
  inputComponent,
  wideTitle = false,
}: FormRowProps) => {
  const inputViewStyle = StyleSheet.flatten([
    templates.inputView,
    wideTitle && templates.inputViewNarrow,
  ]);
  return (
    <View style={templates.containerView}>
      <View style={templates.titleView} padding="right">
        <Text>{title}</Text>
      </View>
      <View style={inputViewStyle}>{inputComponent}</View>
    </View>
  );
};
