import { authHandlers } from './authHandler';
import { homeHandlers } from './homeHandler';

export const handlers = [
  ...authHandlers,
  ...homeHandlers,
];
