export interface NavbarTypes {
  _id: string;
  mainTitle: string;
  socialMedia: SocialMedia[];
  links: NavLinks[];
}

export interface SocialMedia {
  _key: string;
  platform: string;
  icon: string;
  url: string;
}

export interface NavLinks {
  _key: string;
  slug: { current: string };
  label: string;
}

export interface HeroTypes {
  _id: string;
  mainText: string;
  heroImage: string;
  buttonText: ButtonText[];
}

export interface ButtonText {
  label: string;
  _key: string;
  slug: { current: string };
}

export interface overViewText {
  smallText: string;
  bigText: string;
  longText: string;
}

export interface AboutMeTypes {
  _id: string;
  aboutText: overViewText;
}

export interface ModelProps {
  scale: number;
  position?: [number, number, number];
}

export interface ProjectsType {
  _id: string;
  projectName: string;
  projectLinks: ProjectsLinks[];
  projectTechnologies: ProjectTechnologies[];
  image: string;
}

export interface ProjectTechnologies {
  technology: string;
  _key: string;
}

export interface ProjectsLinks {
  linkImage: string;
  projectLink: { current: string };
  label: string;
  _key: string;
}

export interface ProjectsText {
  _id: string;
  projectText: ProjectText;
}

export interface ProjectText {
  longText: string;
  smallText: string;
  bigText: string;
}

export interface WorksText {
  _id: string;
  workText: WorkText;
}

export interface WorkText {
  longText: string;
  smallText: string;
  bigText: string;
}

export interface WorkType {
  _id: string;
  timeLineText: TimeLineType[];
  image: string;
  date: string;
}

export interface TimeLineType {
  _key: string;
  title: string;
  description: string;
  location: string;
}

export interface ContactTypes {
  _id: string;
  contactText: overViewText;
  contactForm: ContactForm[];
}

export interface ContactForm {
  _key: string;
  label: string;
  placeHolder: string;
  type: string;
}
