"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { expenses } from "~/server/db/schema";

export async function createExpense() {
  try {
    const { userId }: { userId: string | null } = auth();
    if (!userId) throw new Error("User not logged in");
    await db.insert(expenses).values({
      amount: "100",
      description: "Test Expense 2",
      expenseDate: new Date().toISOString(),
    });
    return "Success";
  } catch (error) {
    throw new Error("Error creating expense");
  }
}
