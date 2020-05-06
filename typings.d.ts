type Gender = string;
type Age = string;
type SmartphoneExperience = string;
type AreaExperience = string;
type SpeechControlExperience = string;
type SpeechControlType = string | undefined;

interface CharacteristicsResponse {
  gender: Gender;
  age: Age;
  smartphoneExperience: SmartphoneExperience;
  areaExperience: AreaExperience;
  speechControlExperience: SpeechControlExperience;
  speechControlType: SpeechControlType;
}

interface TextExperimentResponse {
  description: string;
}

interface SUSResponse {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;
}
