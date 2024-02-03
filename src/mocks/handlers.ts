import { authHandlers } from './authHandler';
import { homeHandlers } from './homeHandler';
import { productHandlers } from './productHandler';

export const handlers = [
  ...authHandlers,
  ...homeHandlers,
  ...productHandlers,
];
