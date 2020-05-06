import React, { useState, useEffect } from 'react';
import { Button, Switch } from 'react-native';
import { View, Text, Divider, TextInput, ActionSheetInput } from '../';
import { FormRow } from '../FormRow/FormRow';

export interface PersonalDetailsScreenProps {
  callback(personalDetails: PersonalDetails): void;
}

export const PersonalDetailsScreen = ({
  callback,
}: PersonalDetailsScreenProps) => {
  const [age, setAge] = useState<Age>();
  const [gender, setGender] = useState<Gender>();
  const [smartphoneProficiency, setSmartphoneProficiency] = useState<
    SmartphoneProficiency
  >();
  const [consent, setConsent] = useState<boolean>(false);
  const [allowSubmit, setAllowSubmit] = useState<boolean>(false);

  const handleSubmitButtonPress = () => {
    if (age && gender && smartphoneProficiency) {
      const personalDetails: PersonalDetails = {
        age,
        gender,
        smartphoneProficiency,
      };

      callback(personalDetails);
    }
  };

  useEffect(() => {
    const hasAllData =
      age && gender && smartphoneProficiency && consent ? true : false;

    setAllowSubmit(hasAllData);
  }, [age, gender, smartphoneProficiency, consent]);

  return (
    <View type="container" scrolling={true} safeMargin={true}>
      <Text type="header">Personliga uppgifter</Text>

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
              placeholder="Kvinna"
              options={['Kvinna', 'Man', 'Annat', 'Vill ej uppge']}
              onValueChange={setGender}
            />
          }
        />
        <Divider />
        <FormRow
          title="Mobilvana"
          inputComponent={
            <ActionSheetInput
              placeholder="Medel"
              options={['Mycket hög', 'Hög', 'Medel', 'Låg', 'Mycket låg']}
              onValueChange={setSmartphoneProficiency}
            />
          }
        />
        <Divider />
        <FormRow
          title="Jag godkänner att mina uppgifter lagras och bearbetas för användning i studien."
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
