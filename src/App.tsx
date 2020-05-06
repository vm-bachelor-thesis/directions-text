import React, { useState } from 'react';
import {
  PersonalDetailsScreen,
  QuestionnaireText,
  CompletedMessage,
} from './components';

export const App = () => {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>();
  const [questionnaireAnswers, setQuestionnaireAnswers] = useState<
    QuestionnaireAnswers
  >();

  if (!personalDetails) {
    return <PersonalDetailsScreen callback={setPersonalDetails} />;
  }

  if (!questionnaireAnswers) {
    return <QuestionnaireText callback={setQuestionnaireAnswers} />;
  }

  return <CompletedMessage />;
};
