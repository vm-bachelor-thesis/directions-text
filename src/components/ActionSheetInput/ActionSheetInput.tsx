import React, { useState } from 'react';
import { ActionSheetIOS, TouchableWithoutFeedback } from 'react-native';
import { Text } from '..';
import { templates } from './templates';

export interface ActionSheetInputProps {
  placeholder: string;
  options: string[];
  onValueChange(value: string): void;
}

export const ActionSheetInput = ({
  placeholder,
  options,
  onValueChange,
  ...rest
}: ActionSheetInputProps) => {
  const [value, setValue] = useState<string>();

  const openActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [...options, 'Avbryt'],
        cancelButtonIndex: options.length,
      },
      (index) => {
        if (index !== options.length) {
          const newValue = options[index];

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
