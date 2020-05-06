import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { View, Text, Divider, ActionSheetInput } from '../';
import { FormRow } from '../FormRow/FormRow';
import { questions } from './questions';

export interface SUSQuestionnaireProps {
  callback(susResponse: SUSResponse): void;
}

export const SUSQuestionnaire = ({ callback }: SUSQuestionnaireProps) => {
  const [q1, setQ1] = useState<string>();
  const [q2, setQ2] = useState<string>();
  const [q3, setQ3] = useState<string>();
  const [q4, setQ4] = useState<string>();
  const [q5, setQ5] = useState<string>();
  const [q6, setQ6] = useState<string>();
  const [q7, setQ7] = useState<string>();
  const [q8, setQ8] = useState<string>();
  const [q9, setQ9] = useState<string>();
  const [q10, setQ10] = useState<string>();

  const setters = [
    setQ1,
    setQ2,
    setQ3,
    setQ4,
    setQ5,
    setQ6,
    setQ7,
    setQ8,
    setQ9,
    setQ10,
  ];

  const [allowSubmit, setAllowSubmit] = useState<boolean>(false);

  const questionComponents = questions.map((question, index) => (
    <React.Fragment key={index}>
      <FormRow
        title={question}
        wideTitle={true}
        inputComponent={
          <ActionSheetInput
            title={question}
            placeholder="3"
            options={[
              '5 Instämmer helt',
              '4',
              '3',
              '2',
              '1 Instämmer inte alls',
            ]}
            values={['5', '4', '3', '2', '1']}
            onValueChange={setters[index]}
          />
        }
      />
      <Divider />
    </React.Fragment>
  ));

  const handleSubmitButtonPress = () => {
    if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10) {
      const susResponse: SUSResponse = {
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8,
        q9,
        q10,
      };

      callback(susResponse);
    }
  };

  useEffect(() => {
    const hasAllData =
      q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10 ? true : false;

    setAllowSubmit(hasAllData);
  }, [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]);

  return (
    <View type="container">
      <Text type="header">System Usability Scale</Text>

      <Text type="onGrayBackground" margin="bottom+horizontal">
        Dessa uppgifter samlas in för att säkerställa att vi får en varierad
        grupp personer som besvarar undersökningen.
      </Text>

      <View padding="horizontal" borderTopBottom={true}>
        {questionComponents}
      </View>
      <Button
        title="Nästa"
        disabled={!allowSubmit}
        onPress={handleSubmitButtonPress}
      />
    </View>
  );
};
