import React, { useState } from 'react';
import { Button } from 'react-native';
import { View, Text, TextInput } from '..';

export interface QuestionnaireTextProps {
  callback(questionnaireAnswers: QuestionnaireAnswers): void;
}

export const QuestionnaireText = ({ callback }: QuestionnaireTextProps) => {
  const [description, setDescription] = useState<string>('');

  const handleSubmitButtonPress = () => {
    const questionnaireAnswers: QuestionnaireAnswers = {
      description,
    };

    callback(questionnaireAnswers);
  };

  return (
    <View type="container" scrolling={true} safeMargin={true}>
      <Text type="header">Hur hittar man hit?</Text>

      <Text type="onGrayBackground" margin="bottom+horizontal">
        Beskriv så att en person som är i närområdet hittar fram till huset.
        Tänk på att beskrivningen ska kunna användas året om och av personer som
        inte hittar i närområdet.
      </Text>

      <View padding="horizontal" borderTopBottom={true}>
        <TextInput
          placeholder="Beskrivning"
          onChangeText={setDescription}
          lines={20}
        />
      </View>
      <Button title="Slutför" onPress={handleSubmitButtonPress} />
    </View>
  );
};
