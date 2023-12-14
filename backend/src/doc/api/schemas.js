import { petsComponents } from './petsSchemas.doc.js';
import { usersComponents } from './usersSchemas.doc.js';
import alertComponent from './alertSchemas.doc.js';

export const components = {
  schemas: {
    ...usersComponents.schemas,
    ...petsComponents.schemas,
    ...alertComponent.schemas
  }
};