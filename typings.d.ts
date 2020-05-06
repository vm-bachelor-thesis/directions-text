type Gender = string;
type Age = string;
type SmartphoneExperience = string;
type AreaExperience = string;
type SpeechControlExperience = string;
type SpeechControlType = string | undefined;

interface PersonalDetails {
  gender: Gender;
  age: Age;
  smartphoneExperience: SmartphoneExperience;
  areaExperience: AreaExperience;
  speechControlExperience: SpeechControlExperience;
  speechControlType: SpeechControlType;
}

interface QuestionnaireAnswers {
  description: string;
}
