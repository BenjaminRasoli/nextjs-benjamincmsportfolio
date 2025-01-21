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
