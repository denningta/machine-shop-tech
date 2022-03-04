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
   * Route — `slug`
   *
   * Intended route of the page
   */
  route?: { _type: "route"; current: string };

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
   * Route — `slug`
   *
   * What route should this call-to-action call when clicked?
   */
  route?: { _type: "route"; current: string };
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
   * Route — `slug`
   *
   * When the nav item is click, where should the user be sent?
   */
  route?: { _type: "route"; current: string };
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
   * Description — `blockContent`
   *
   *
   */
  description?: BlockContent;
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

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type Documents =
  | LandingPage
  | CallToAction
  | NavItem
  | Service
  | Post
  | Author
  | Category;
