import sanityClient from "@sanity/client";
import groq from "groq";
import type * as Schema from '../interfaces/sanity-schema';

export const client = sanityClient({
  projectId: '6xnf6evu',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
});

export function getlandingPageQuery(route: string) { 
  return groq`
  *[_type == 'landingPage' && route->route.current == '${route}'][0] {
    ...,
    route->,
    "callToAction": callToAction->{
      ...,
      "route": route->route.current,
    },
    "navItems": navItems[]->{
      ...,
      "route": route->route.current
    },
    "services": services[]->
  }
`;
}

export type LandingPageQueryResult = Omit<Schema.LandingPage, 'callToAction' | 'navItems' | 'services'> & {
  callToAction: Omit<Schema.CallToAction, 'route'> & {
    route: string;
  };
  navItems: Schema.NavItem[];
  services: Schema.Service[];
}


export const routesQuery = groq`
  *[ _type == 'route' ] {
    "route": route.current,
    "connectedPage": *[ _type == "landingPage" && references(^._id) ][0] {
      "type": _type
    }
  }
`

export type RoutesQueryResult = Array<{
  route: string,
  connectedPage: {
    type: string
  }
}>