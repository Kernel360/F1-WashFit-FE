import { authHandlers } from './authHandler';
import { favoriteHandlers } from './favoriteHandler';
import { homeHandlers } from './homeHandler';
import { productHandlers } from './productHandler';

export const handlers = [
  ...authHandlers,
  ...homeHandlers,
  ...productHandlers,
  ...favoriteHandlers,
];
