import React, { useState, useEffect } from 'react';
import { Button, Switch } from 'react-native';
import { View, Text, Divider, TextInput, ActionSheetInput } from '..';
import { FormRow } from '../FormRow/FormRow';

export interface CharacteristicsQuestionnaireProps {
  callback(characteristicsResponse: CharacteristicsResponse): void;
}

export const CharacteristicsQuestionnaire = ({
  callback,
}: CharacteristicsQuestionnaireProps) => {
  const [age, setAge] = useState<Age>();
  const [gender, setGender] = useState<Gender>();
  const [smartphoneExperience, setSmartphoneExperience] = useState<
    SmartphoneExperience
  >();
  const [areaExperience, setAreaExperience] = useState<AreaExperience>();
  const [speechControlExperience, setSpeechControlExperience] = useState<
    SpeechControlExperience
  >();
  const [speechControlType, setSpeechControlType] = useState<
    SpeechControlType
  >();
  const [consent, setConsent] = useState<boolean>(false);
  const [allowSubmit, setAllowSubmit] = useState<boolean>(false);

  const handleSubmitButtonPress = () => {
    if (
      age &&
      gender &&
      smartphoneExperience &&
      areaExperience &&
      speechControlExperience
    ) {
      const personalDetails: CharacteristicsResponse = {
        age,
        gender,
        smartphoneExperience,
        areaExperience,
        speechControlExperience,
        speechControlType,
      };

      callback(personalDetails);
    }
  };

  useEffect(() => {
    const hasAllData =
      age &&
      gender &&
      smartphoneExperience &&
      areaExperience &&
      speechControlExperience &&
      consent
        ? true
        : false;

    setAllowSubmit(hasAllData);
  }, [
    age,
    gender,
    smartphoneExperience,
    areaExperience,
    speechControlExperience,
    consent,
  ]);

  return (
    <View type="container">
      <Text type="header">Personliga uppgifter</Text>

      <Text type="onGrayBackground" margin="bottom+horizontal">
        Dessa uppgifter samlas in för att säkerställa att vi får en varierad
        grupp personer som besvarar undersökningen.
      </Text>

      <View padding="horizontal" borderTopBottom={true}>
        <FormRow
          title="Ålder"
          inputComponent={
            <TextInput
              placeholder="35"
              keyboardType="number-pad"
              onChangeText={setAge}
            />
          }
        />
        <Divider />
        <FormRow
          title="Kön"
          inputComponent={
            <ActionSheetInput
              title="Vilket kön identifierar du dig med?"
              placeholder="Kvinna"
              options={['Kvinna', 'Man', 'Annat', 'Vill ej uppge']}
              onValueChange={setGender}
            />
          }
        />
        <Divider />
        <FormRow
          title="Använder mobiltelefon"
          inputComponent={
            <ActionSheetInput
              title="Hur ofta använder du mobiltelefon?"
              placeholder="Minst en gång i veckan"
              options={[
                'Varje dag',
                'Flera gånger i veckan',
                'Minst en gång i veckan',
                'Minst en gång i månaden',
                'Mer sällan',
              ]}
              onValueChange={setSmartphoneExperience}
            />
          }
        />
        <Divider />
        <FormRow
          title="Är i närområdet"
          inputComponent={
            <ActionSheetInput
              title="Hur ofta är du i närområdet?"
              placeholder="Minst en gång i veckan"
              options={[
                'Varje dag',
                'Flera gånger i veckan',
                'Minst en gång i veckan',
                'Minst en gång i månaden',
                'Mer sällan',
              ]}
              onValueChange={setAreaExperience}
            />
          }
        />
        <Divider />
        <FormRow
          title="Använder röststyrning"
          inputComponent={
            <ActionSheetInput
              title="Hur ofta använder du röststyrning?"
              placeholder="Minst en gång i veckan"
              options={[
                'Varje dag',
                'Flera gånger i veckan',
                'Minst en gång i veckan',
                'Minst en gång i månaden',
                'Mer sällan',
              ]}
              onValueChange={setSpeechControlExperience}
            />
          }
        />
        <Divider />
        <FormRow
          title="Om ja, typ av röststyrning"
          inputComponent={
            <TextInput
              placeholder="Siri, Google Home"
              onChangeText={setSpeechControlType}
            />
          }
        />
        <Divider />
        <FormRow
          title="Jag godkänner att mina uppgifter lagras och bearbetas för användning i studien."
          wideTitle={true}
          inputComponent={
            <Switch
              value={consent}
              onValueChange={() => setConsent(!consent)}
            />
          }
        />
      </View>
      <Button
        title="Nästa"
        disabled={!allowSubmit}
        onPress={handleSubmitButtonPress}
      />
    </View>
  );
};
