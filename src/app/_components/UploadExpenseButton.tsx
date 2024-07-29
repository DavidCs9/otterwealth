"use client";
import { createExpense } from "~/app/actions/expenses";

export default function UploadExpenseButton() {
  const handleClick = async () => {
    try {
      await createExpense();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="rounded-md bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
      onClick={handleClick}
    >
      Upload Expense
    </button>
  );
}
