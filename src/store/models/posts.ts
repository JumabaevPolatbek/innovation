export type Posts = Post[];

export interface Post {
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
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: any[];
  featured_image_src: string;
  author_info: AuthorInfo;
  uagb_featured_image_src: UagbFeaturedImageSrc;
  uagb_author_info: UagbAuthorInfo;
  uagb_comment_info: number;
  uagb_excerpt: string;
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

export interface AuthorInfo {
  display_name: string;
  author_link: string;
}

export interface UagbFeaturedImageSrc {
  full: [string, number, number, boolean];
  thumbnail: [string, number, number, boolean];
  medium: [string, number, number, boolean];
  medium_large: [string, number, number, boolean];
  large: [string, number, number, boolean];
  "1536x1536": [string, number, number, boolean];
  "2048x2048": [string, number, number, boolean];
  "trp-custom-language-flag": [string, number, number, boolean];
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
  "predecessor-version": PredecessorVersion[];
  "wp:featuredmedia": Featuredmedum[];
  "wp:attachment": WpAttachment[];
  "wp:term": WpTerm[];
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

export interface Featuredmedum {
  embeddable: boolean;
  href: string;
}

export interface WpAttachment {
  href: string;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}
