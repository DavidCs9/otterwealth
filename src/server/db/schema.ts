// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  uniqueIndex,
  integer,
  date,
  decimal,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `otterwealth_${name}`);

// export const users = createTable(
//   "user",
//   {
//     id: serial("id").primaryKey(),
//     username: varchar("username", { length: 50 }).notNull().unique(),
//     email: varchar("email", { length: 100 }).notNull().unique(),
//     passwordHash: varchar("password_hash", { length: 255 }).notNull(),
//     createdAt: timestamp("created_at", { withTimezone: true })
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//   },
//   (table) => ({
//     usernameIndex: index("username_idx").on(table.username),
//     emailIndex: index("email_idx").on(table.email),
//   }),
// );

// export const categories = createTable(
//   "category",
//   {
//     id: serial("id").primaryKey(),
//     name: varchar("name", { length: 50 }).notNull().unique(),
//     userId: integer("user_id").references(() => users.id),
//     createdAt: timestamp("created_at", { withTimezone: true })
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//   },
//   (table) => ({
//     nameIndex: index("name_idx").on(table.name),
//     userIdIndex: index("user_id_idx").on(table.userId),
//   }),
// );

export const expenses = createTable(
  "expense",
  {
    id: serial("id").primaryKey(),
    // userId: integer("user_id").references(() => users.id),
    // categoryId: integer("category_id").references(() => categories.id),
    amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
    description: varchar("description").notNull(),
    expenseDate: date("expense_date").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => ({
    // userIdIndex: index("user_id_idx").on(table.userId),
    // categoryIdIndex: index("category_id_idx").on(table.categoryId),
    expenseDateIndex: index("expense_date_idx").on(table.expenseDate),
  }),
);

// export const monthlyBudgets = createTable(
//   "monthly_budget",
//   {
//     id: serial("id").primaryKey(),
//     userId: integer("user_id").references(() => users.id),
//     monthYear: date("month_year").notNull(),
//     expectedIncome: decimal("expected_income", {
//       precision: 10,
//       scale: 2,
//     }).notNull(),
//     actualIncome: decimal("actual_income", { precision: 10, scale: 2 }),
//     expectedExpenses: decimal("expected_expenses", {
//       precision: 10,
//       scale: 2,
//     }).notNull(),
//     actualExpenses: decimal("actual_expenses", { precision: 10, scale: 2 }),
//     createdAt: timestamp("created_at", { withTimezone: true })
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//   },
//   (table) => ({
//     userMonthYearUnique: uniqueIndex("user_month_year_unique").on(
//       table.userId,
//       table.monthYear,
//     ),
//     userIdIndex: index("user_id_idx").on(table.userId),
//     monthYearIndex: index("month_year_idx").on(table.monthYear),
//   }),
// );

// export const categoryBudgets = createTable(
//   "category_budget",
//   {
//     id: serial("id").primaryKey(),
//     categoryId: integer("category_id").references(() => categories.id),
//     monthYear: date("month_year").notNull(),
//     expectedBudget: decimal("expected_budget", {
//       precision: 10,
//       scale: 2,
//     }).notNull(),
//     actualExpenses: decimal("actual_expenses", {
//       precision: 10,
//       scale: 2,
//     }).default("0"),
//     createdAt: timestamp("created_at", { withTimezone: true })
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//   },
//   (table) => ({
//     categoryMonthYearUnique: uniqueIndex("category_month_year_unique").on(
//       table.categoryId,
//       table.monthYear,
//     ),
//     categoryIdIndex: index("category_id_idx").on(table.categoryId),
//     monthYearIndex: index("month_year_idx").on(table.monthYear),
//   }),
// );
