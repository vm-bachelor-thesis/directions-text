import React, { useState, useEffect } from 'react';
import { Button, StyleSheet } from 'react-native';
import { View, Text, TextInput } from 'directions-components';

export interface TextExperimentQuestionnaireProps {
  callback(experimentResponse: TextExperimentResponse): void;
}

export const TextExperimentQuestionnaire = ({
  callback,
}: TextExperimentQuestionnaireProps) => {
  const [description, setDescription] = useState<string>('');
  const [timeStarted, setTimeStarted] = useState<number>();

  const handleSubmitButtonPress = () => {
    if (timeStarted && description) {
      const questionnaireAnswers: TextExperimentResponse = {
        description,
        timeStarted: timeStarted,
        timeFinished: Date.now(),
      };

      callback(questionnaireAnswers);
    }
  };

  useEffect(() => {
    if (typeof timeStarted === 'undefined') {
      setTimeStarted(Date.now());
    }
  }, [timeStarted]);

  return (
    <View type="container">
      <View background="gray" style={style.headerFlex}>
        <Text type="header">Hur hittar man hit?</Text>
        <Button title="Slutför" onPress={handleSubmitButtonPress} />
      </View>

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
    </View>
  );
};

const style = StyleSheet.create({
  headerFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
