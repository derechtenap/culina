import Dexie, { type EntityTable } from "dexie";

import { APP_NAME } from "utils/constants";

import type { Profile } from "types/profile";

const lowerCasedAppName = APP_NAME.toLowerCase();

const database = new Dexie(lowerCasedAppName) as Dexie & {
  profiles: EntityTable<Profile>;
};

// & = Unique index
database.version(1).stores({
  profiles: "&uuid",
});

export default database;
