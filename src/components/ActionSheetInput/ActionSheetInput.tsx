import React, { useState } from 'react';
import { ActionSheetIOS, TouchableWithoutFeedback } from 'react-native';
import { Text } from '..';
import { templates } from './templates';

export interface ActionSheetInputProps {
  title: string;
  placeholder: string;
  options: string[];
  values?: string[];
  onValueChange: (value: string) => void;
}

export const ActionSheetInput = ({
  title,
  placeholder,
  options,
  values,
  onValueChange,
  ...rest
}: ActionSheetInputProps) => {
  const [value, setValue] = useState<string>();

  const openActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [...options, 'Avbryt'],
        title: title,
        cancelButtonIndex: options.length,
      },
      (index) => {
        if (index !== options.length) {
          const newValue = values ? values[index] : options[index];

          setValue(newValue);
          onValueChange(newValue);
        }
      },
    );
  };

  const handlePress = () => {
    openActionSheet();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress} {...rest}>
      <Text style={!value && templates.placeholder}>
        {value ? value : placeholder}
      </Text>
    </TouchableWithoutFeedback>
  );
};
