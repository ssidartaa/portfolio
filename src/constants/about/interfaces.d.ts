import { IconType } from "react-icons/lib";

export type IQualificationType = "education" | "experience";

export type ISkillsType = "skills" | "tools";

export type IInfoType =
  | "Username"
  | "GitHub"
  | "Email"
  | "Whatsapp"
  | "LinkedIn"
  | "Formation"
  | "Role"
  | "Location";

export interface IInfoData {
  title: string;
  Icon: IconType;
  link?: string;
  description?: string;
  portifolio?: string;
}

export type IInfo = Record<IInfoType, IInfoData>;

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

export type IQualificationDataMap = {
  education: IEducationData;
  experience: IExperienceData;
};

export interface IQualifications<
  T extends IQualificationType = IQualificationType,
> {
  title: T;
  data: IQualificationDataMap[T][];
}

export type ISkills = Record<ISkillsType, string[]>;
