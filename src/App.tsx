import React, { useState, useEffect } from 'react';
import {
  PersonalDetailsScreen,
  QuestionnaireText,
  SUSQuestionnaire,
  CompletedMessage,
} from './components';

export const App = () => {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>();
  const [questionnaireAnswers, setQuestionnaireAnswers] = useState<
    QuestionnaireAnswers
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

    if (personalDetails && questionnaireAnswers && susResponse) {
      const payload = {
        response: {
          personalDetails,
          questionnaireAnswers,
          susResponse,
        },
      };

      const url =
        'https://directions-service.azurewebsites.net/api/uploadtextresponse?code=Nsr00Qe2TxgkVJTH4y5mFIcFaomvOsm/jtSYCGbeSkVqcp4C48xxpQ==';

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
  }, [personalDetails, questionnaireAnswers, susResponse, dataSaved]);

  if (!personalDetails) {
    return <PersonalDetailsScreen callback={setPersonalDetails} />;
  }

  if (!questionnaireAnswers) {
    return <QuestionnaireText callback={setQuestionnaireAnswers} />;
  }

  if (!susResponse) {
    return <SUSQuestionnaire callback={setSUSResponse} />;
  }

  return <CompletedMessage message={rejectedPayload} />;
};
