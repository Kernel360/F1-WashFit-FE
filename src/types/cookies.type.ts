export interface CookieGetOptions {
  doNotParse?: boolean;
  doNotUpdate?: boolean;
}
export interface CookieSetOptions {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | 'none' | 'lax' | 'strict';
}
export interface CookieChangeOptions {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  options?: CookieSetOptions;
}
