import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AdminMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Admin {
  readonly id: string;
  readonly fullName?: string | null;
  readonly email?: string | null;
  readonly residential_address?: string | null;
  readonly phone_number?: string | null;
  readonly office_name?: string | null;
  readonly office_address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Admin, AdminMetaData>);
  static copyOf(source: Admin, mutator: (draft: MutableModel<Admin, AdminMetaData>) => MutableModel<Admin, AdminMetaData> | void): Admin;
}