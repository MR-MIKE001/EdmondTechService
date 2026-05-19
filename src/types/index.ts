export interface NavItem {
  label: string;
  path: string;
}

export interface WhyItem {
  number: string;
  heading: string;
  body: string;
}

export interface ProcessStep {
  number: string;
  heading: string;
  body: string;
}

export interface ContactDetail {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface SEOMeta {
  title: string;
  description: string;
  canonical?: string;
}
