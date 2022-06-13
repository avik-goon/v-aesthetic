// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Admin } = initSchema(schema);

export {
  Admin
};