import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Route
 *
 *
 */
export interface Route extends SanityDocument {
  _type: "route";

  /**
   * Rote Title — `string`
   *
   * Internal, human-readable name for this route
   */
  title?: string;

  /**
   * Route — `slug`
   *
   * Hyphenated name of the route.  "root" is a reserved keyword for the root of the domain (eg. https://domain.com)
   */
  route?: { _type: "route"; current: string };
}

/**
 * Landing Page
 *
 *
 */
export interface LandingPage extends SanityDocument {
  _type: "landingPage";

  /**
   * Page Name — `string`
   *
   * Name the page.  Not visible to the outside world.
   */
  pageName?: string;

  /**
   * Description — `string`
   *
   * Describe the purpose of the page.  Not visible to the outside world.
   */
  description?: string;

  /**
   * Route — `reference`
   *
   * Intended route of the page
   */
  route?: SanityReference<Route>;

  /**
   * Headline — `string`
   *
   * The marketing headline.
   */
  headline?: string;

  /**
   * subHeadline — `string`
   *
   * The marketing sub-headline.
   */
  subHeadline?: string;

  /**
   * Call-to-Action — `reference`
   *
   * Assign a call-to-action
   */
  callToAction?: SanityReference<CallToAction>;

  /**
   * Navigation Items — `array`
   *
   * Navigation items to display on the site
   */
  navItems?: Array<SanityKeyedReference<NavItem>>;

  /**
   * Services — `array`
   *
   * Add the services that should be displayed on this page.
   */
  services?: Array<SanityKeyedReference<Service>>;

  /**
   * Footer — `reference`
   *
   * Choose the footer to display on this landing page
   */
  footer?: SanityReference<Footer>;
}

/**
 * Footer
 *
 *
 */
export interface Footer extends SanityDocument {
  _type: "footer";

  /**
   * Footer title — `string`
   *
   * Internal title of the footer
   */
  title?: string;

  /**
   * Description — `string`
   *
   * Describe the purpose of the footer
   */
  description?: string;

  /**
   * Navigation Items — `array`
   *
   * Select the navigation items to display in the footer
   */
  navItems?: Array<SanityKeyedReference<NavItem>>;

  /**
   * Social Connections — `array`
   *
   * Select the social connections to display in the footer
   */
  socials?: Array<SanityKeyedReference<SocialConnection>>;
}

/**
 * Call-to-Action
 *
 *
 */
export interface CallToAction extends SanityDocument {
  _type: "callToAction";

  /**
   * Button Text — `string`
   *
   * The text that will be displayed in the button
   */
  buttonText?: string;

  /**
   * CTA description — `string`
   *
   * Describe the purpose of this call-to-action
   */
  description?: string;

  /**
   * Style — `string`
   *
   * define the style of the call-to-action
   */
  style?: "primary" | "secondary";

  /**
   * Route — `reference`
   *
   * What route should this call-to-action call when clicked?
   */
  route?: SanityReference<Route>;
}

/**
 * Navigation Item
 *
 *
 */
export interface NavItem extends SanityDocument {
  _type: "navItem";

  /**
   * Navigation Title — `string`
   *
   * Ex: Home, About, etc.  The displayed text of the navigation item.
   */
  title?: string;

  /**
   * Icon — `string`
   *
   * Icon selector from google fonts library https://fonts.google.com/icons?selected=Material+Icons
   */
  icon?: string;

  /**
   * Route — `reference`
   *
   * When the nav item is clicked, where should the user be sent?
   */
  route?: SanityReference<Route>;
}

/**
 * Service
 *
 *
 */
export interface Service extends SanityDocument {
  _type: "service";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * SubTitle — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * Google Fonts Icon — `string`
   *
   * Icon selector from https://fonts.google.com/icons?selected=Material+Icons
   */
  icon?: string;

  /**
   * Image — `image`
   *
   * Visual description of the service
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Description — `blockContent`
   *
   *
   */
  description?: BlockContent;
}

/**
 * Social Connections
 *
 *
 */
export interface SocialConnection extends SanityDocument {
  _type: "socialConnection";

  /**
   * Social Media Type — `string`
   *
   * Select the social media platform to connect
   */
  type?: "facebook" | "instagram" | "twitter" | "linkedin";

  /**
   * URL — `url`
   *
   * Enter the url for the specific page on the platform
   */
  url?: string;
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Excerpt — `simplePortableText`
   *
   * The text that will display on google search results or socail share cards
   */
  excerpt?: SimplePortableText;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Featured Post? — `boolean`
   *
   * Check to pin this post to the featured list
   */
  featured?: boolean;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: "author";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Bio — `array`
   *
   *
   */
  bio?: Array<SanityKeyed<SanityBlock>>;
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

/**
 * settings
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: "siteSettings";

  /**
   * Brand Name — `string`
   *
   * Branding title that appears next to the brand logo
   */
  name?: string;

  /**
   * Brand Icon — `image`
   *
   * The brand icon for the site
   */
  icon?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type SimplePortableText = Array<SanityKeyed<SanityBlock>>;

export type Documents =
  | Route
  | LandingPage
  | Footer
  | CallToAction
  | NavItem
  | Service
  | SocialConnection
  | Post
  | Author
  | Category
  | SiteSettings;
