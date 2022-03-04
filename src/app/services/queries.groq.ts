import groq from "groq";
import type * as Schema from '../interfaces/sanity-schema';

export const landingPagesQuery = groq`
  *[_type == 'landingPage' && route.current == 'root'][0] {
    ...,
    callToAction->,
    "navItems": navItems[]->,
    "services": services[]->
  }
`;

export type LandingPageQueryResult = Omit<Schema.LandingPage, 'callToAction' | 'navItems' | 'services'> & {
  callToAction: Schema.CallToAction;
  navItems: Schema.NavItem[];
  services: Schema.Service[];
}