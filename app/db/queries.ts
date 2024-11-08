import db from ".";
import { usersTable } from "./schema";

export default async function getCards () {
    const data = await db.select().from(usersTable);
    return data;
  };