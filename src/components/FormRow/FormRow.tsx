import React from 'react';
import { View, Text } from '../';
import { templates } from './templates';

export interface FormRowProps {
  title: string;
  inputComponent: React.ReactNode;
}

export const FormRow = ({ title, inputComponent }: FormRowProps) => {
  return (
    <View style={templates.containerView}>
      <View style={templates.titleView}>
        <Text>{title}</Text>
      </View>
      <View style={templates.inputView}>{inputComponent}</View>
    </View>
  );
};
