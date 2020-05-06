type Gender = string;
type Age = string;
type SmartphoneProficiency = string;

interface PersonalDetails {
  gender: Gender;
  age: Age;
  smartphoneProficiency: SmartphoneProficiency;
}

interface QuestionnaireAnswers {
  doorColor: string | undefined;
  landmarks: string | undefined;
}
