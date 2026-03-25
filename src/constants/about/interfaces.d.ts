import { ReactNode } from "react";

export enum QualificationType {
  EDUCATION = "education",
  EXPERIENCE = "experience",
}

export enum SkillsType {
  SKILLS = "skills",
  TOOLS = "tools",
}

export enum InfoType {
  USERNAME = "Username",
  GITHUB = "GitHub",
  EMAIL = "Email",
  WHATSAPP = "Whatsapp",
  LINKEDIN = "LinkedIn",
  X_TWITTER = "X/Twitter",
  FORMATION = "Formation",
  ROLE = "Role",
  LOCATION = "Location",
}

export interface IInfoData {
  title: string;
  icon: ReactNode;
}

export interface IInfo {
  [InfoType.USERNAME]: IInfoData;
  [InfoType.GITHUB]: IInfoData;
  [InfoType.EMAIL]: IInfoData;
  [InfoType.WHATSAPP]: IInfoData;
  [InfoType.LINKEDIN]: IInfoData;
  [InfoType.X_TWITTER]: IInfoData;
  [InfoType.FORMATION]: IInfoData;
  [InfoType.ROLE]: IInfoData;
  [InfoType.LOCATION]: IInfoData;
}

export interface IEducationData {
  school: string;
  qualification: string;
  years: string;
  location: string;
}

export interface IExperienceData {
  company: string;
  role: string;
  years: string;
  location: string;
  description: string[];
  technologies: string[];
}

export type QualificationData<T extends QualificationType> =
  T extends QualificationType.EDUCATION
    ? IEducationData
    : T extends QualificationType.EXPERIENCE
      ? IExperienceData
      : never;

export interface IQualifications<T extends QualificationType> {
  title: T;
  data: QualificationData<T>[];
}

export interface ISkills {
  [SkillsType.SKILLS]: string[];
  [SkillsType.TOOLS]: string[];
}
