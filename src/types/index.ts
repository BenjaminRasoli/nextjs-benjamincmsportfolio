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
