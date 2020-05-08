import React, { useState, useEffect } from 'react';
import {
  CharacteristicsQuestionnaire,
  SUSQuestionnaire,
  CompletedMessage,
} from 'directions-components';
import { TextExperimentQuestionnaire } from './components';

export const App = () => {
  const [characteristicsResponse, setCharacteristicsResponse] = useState<
    CharacteristicsResponse
  >();
  const [experimentResponse, setExperimentResponse] = useState<
    TextExperimentResponse
  >();
  const [susResponse, setSUSResponse] = useState<SUSResponse>();

  const [dataSaved, setDataSaved] = useState<boolean | undefined>(undefined);
  const [rejectedPayload, setRejectedPayload] = useState<object | undefined>(
    undefined,
  );

  useEffect(() => {
    if (dataSaved) {
      return;
    }

    if (characteristicsResponse && experimentResponse && susResponse) {
      const payload = {
        response: {
          characteristics: characteristicsResponse,
          experiment: experimentResponse,
          sus: susResponse,
        },
      };

      const url =
        'https://directions-service.azurewebsites.net/api/uploadTextResponse?code=Nsr00Qe2TxgkVJTH4y5mFIcFaomvOsm/jtSYCGbeSkVqcp4C48xxpQ==';

      fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.ok) {
            setDataSaved(true);
            setRejectedPayload(undefined);
          } else {
            setDataSaved(false);
            setRejectedPayload(payload);
          }
        })
        .catch(console.warn);
    }
  }, [characteristicsResponse, experimentResponse, susResponse, dataSaved]);

  if (!experimentResponse) {
    return <TextExperimentQuestionnaire callback={setExperimentResponse} />;
  }

  if (!susResponse) {
    return <SUSQuestionnaire callback={setSUSResponse} />;
  }

  if (!characteristicsResponse) {
    return (
      <CharacteristicsQuestionnaire callback={setCharacteristicsResponse} />
    );
  }

  return <CompletedMessage message={rejectedPayload} />;
};
