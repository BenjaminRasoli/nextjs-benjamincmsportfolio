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
  file: { asset: { _ref: string } };
}

export interface HeroTypes {
  _id: string;
  mainText: string;
  firstName: string;
  lastName: string;
  textPhrases: TextPhrases[];
  heroImage: string;
  buttonText: ButtonText[];
}

export interface TextPhrases {
  textPhrase: string;
}

export interface ButtonText {
  label: string;
  _key: string;
  slug: { current: string };
}

export interface overViewText {
  _id: string;
  smallText: string;
  bigText: string;
  longText: string;
}

export interface AboutMeTypes {
  _id: string;
  aboutText: overViewText;
}

export interface SkillsTextTypes {
  _id: string;
  skillText: overViewText;
}

export interface SkillsTypes {
  _id: string;
  skillsImage: string;
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
  projectText: overViewText;
}

export interface WorksText {
  _id: string;
  workText: overViewText;
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
  position: string;
}

export interface ContactTypes {
  _id: string;
  contactText: overViewText;
  contactSendMessageButton: { buttonText: string; buttonIcon: string };
  contactEmail: { emailText: string; emailIcon: string };
  contactForm: ContactForm[];
}

export interface ContactForm {
  _key: string;
  label: string;
  placeHolder: string;
  type: string;
}

export interface FooterTypes {
  _id: string;
  copyRightText: string;
  footerContactTitle: FooterContactTitle[];
  socialMedia: SocialMedia[];
  mainTitle: MainTitle[];
  footerLinksTitle: FooterLinksTitle[];
}

export interface FooterContactTitle {
  _key: string;
  footerContact: string;
  footerContactValue: string;
}

export interface SocialMedia {
  _key: string;
  platform: string;
  icon: string;
  url: string;
}

export interface MainTitle {
  _key: string;
  footerTitle: string;
  footerTitleType: string;
}

export interface FooterLinksTitle {
  _key: string;
  footerLinksText: string;
  footerLinks: { current: string };
}
