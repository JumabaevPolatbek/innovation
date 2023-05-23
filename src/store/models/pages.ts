export type Pages = Page[];

export interface Page {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Meta;
  featured_image_src: any;
  uagb_featured_image_src: UagbFeaturedImageSrc;
  uagb_author_info: UagbAuthorInfo;
  uagb_comment_info: number;
  uagb_excerpt: any;
  _links: Links;
}

export interface Guid {
  rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Meta {
  _uag_custom_page_level_css: string;
  ub_ctt_via: string;
  "site-sidebar-layout": string;
  "site-content-layout": string;
  "ast-global-header-display": string;
  "ast-main-header-display": string;
  "ast-hfb-above-header-display": string;
  "ast-hfb-below-header-display": string;
  "ast-hfb-mobile-header-display": string;
  "site-post-title": string;
  "ast-breadcrumbs-content": string;
  "ast-featured-img": string;
  "footer-sml-layout": string;
  "theme-transparent-header-meta": string;
  "adv-header-id-meta": string;
  "stick-header-meta": string;
  "header-above-stick-meta": string;
  "header-main-stick-meta": string;
  "header-below-stick-meta": string;
}

export interface UagbFeaturedImageSrc {
  full: boolean;
  thumbnail: boolean;
  medium: boolean;
  medium_large: boolean;
  large: boolean;
  "1536x1536": boolean;
  "2048x2048": boolean;
  "trp-custom-language-flag": boolean;
}

export interface UagbAuthorInfo {
  display_name: string;
  author_link: string;
}

export interface Links {
  self: Self[];
  collection: Collection[];
  about: About[];
  author: Author[];
  replies: Reply[];
  "version-history": VersionHistory[];
  "predecessor-version"?: PredecessorVersion[];
  "wp:attachment": WpAttachment[];
  curies: Cury[];
}

export interface Self {
  href: string;
}

export interface Collection {
  href: string;
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Reply {
  embeddable: boolean;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface WpAttachment {
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}
