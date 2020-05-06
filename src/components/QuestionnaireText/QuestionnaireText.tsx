import React, { useState } from 'react';
import { Button } from 'react-native';
import { View, Text, Divider, TextInput } from '..';
import { FormRow } from '../FormRow/FormRow';

export interface QuestionnaireTextProps {
  callback(questionnaireAnswers: QuestionnaireAnswers): void;
}

export const QuestionnaireText = ({ callback }: QuestionnaireTextProps) => {
  const [doorColor, setDoorColor] = useState<string>();
  const [landmarks, setLandmarks] = useState<string>();

  const handleSubmitButtonPress = () => {
    const questionnaireAnswers: QuestionnaireAnswers = {
      doorColor,
      landmarks,
    };

    callback(questionnaireAnswers);
  };

  return (
    <View type="container" scrolling={true} safeMargin={true}>
      <Text type="header">Platsbeskrivning</Text>

      <View padding="horizontal" borderTopBottom={true}>
        <FormRow
          title="Färg på dörren"
          inputComponent={
            <TextInput placeholder="Färg" onChangeText={setDoorColor} />
          }
        />
        <Divider />
        <FormRow
          title="Synliga landmärken"
          inputComponent={
            <TextInput placeholder="Landmärken" onChangeText={setLandmarks} />
          }
        />
      </View>
      <Button title="Slutför" onPress={handleSubmitButtonPress} />
    </View>
  );
};
