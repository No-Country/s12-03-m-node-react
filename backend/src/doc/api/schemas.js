import { petsComponents } from './petsSchemas.doc.js';
import { usersComponents } from './usersSchemas.doc.js';

export const components = {
  schemas: {
    ...usersComponents.schemas,
    ...petsComponents.schemas,
  }
};