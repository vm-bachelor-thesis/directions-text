type Gender = string;
type Age = string;
type SmartphoneExperience = string;
type AreaExperience = string;
type SpeechControlExperience = string;

interface PersonalDetails {
  gender: Gender;
  age: Age;
  smartphoneExperience: SmartphoneExperience;
  areaExperience: AreaExperience;
  speechControlExperience: SpeechControlExperience;
}

interface QuestionnaireAnswers {
  description: string;
}
