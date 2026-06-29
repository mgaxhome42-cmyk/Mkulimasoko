import { pgTable, serial, text, numeric, timestamp } from "drizzle-orm/pg-core";

export const mazao = pgTable("mazao", {
  id: serial().primaryKey(),
  createdAt: timestamp("created_at").defaultNow(),
  ainaYaZao: text("aina_ya_zao").notNull(),
  bei: numeric("bei").notNull(),
  eneo: text("eneo").notNull(),
});
