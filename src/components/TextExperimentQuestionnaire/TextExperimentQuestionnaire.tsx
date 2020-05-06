import React, { useState } from 'react';
import { Button } from 'react-native';
import { View, Text, TextInput } from '..';

export interface TextExperimentQuestionnaireProps {
  callback(experimentResponse: TextExperimentResponse): void;
}

export const TextExperimentQuestionnaire = ({
  callback,
}: TextExperimentQuestionnaireProps) => {
  const [description, setDescription] = useState<string>('');

  const handleSubmitButtonPress = () => {
    const questionnaireAnswers: TextExperimentResponse = {
      description,
    };

    callback(questionnaireAnswers);
  };

  return (
    <View type="container">
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