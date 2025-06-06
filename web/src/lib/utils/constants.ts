// Read from environment variable or fallback to localhost
import { backendHost } from '../config/env';

export const redirectUriParam = 'redirect_uri';

export const endpointMapping = Object.freeze({
  getGoogleLoginUrl: new URL(`${backendHost}/auth/google/login`),
  getMeUrl: new URL(`${backendHost}/auth/me`),
  postLogoutUrl: new URL(`${backendHost}/auth/logout`),
  uploadStaticFireUrl: new URL(`${backendHost}/api/staticfire/upload`),
  getStaticFireMetadataUrl: new URL(`${backendHost}/api/staticfire/metadata`),
  postStaticFireColumnsUrl: new URL(`${backendHost}/api/staticfire/columns`),
  getUsageURL: new URL(`${backendHost}/api/usage`),
});
