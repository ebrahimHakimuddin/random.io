import { integer, pgTable, varchar, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("randomio_cards", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  appName: varchar({ length: 255 }).notNull(),
  route: varchar({ length: 255 }).notNull(),
  imgLink:text().notNull(),
  desc: text().notNull(),
});