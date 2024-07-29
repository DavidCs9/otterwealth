import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { db } from "~/server/db";
import UploadExpenseButton from "./_components/UploadExpenseButton";

export default async function HomePage() {
  const expenses = await db.query.expenses.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <SignedOut>
        <div className="text-gray-400">
          Pleased{" "}
          <label className="text-white">
            <SignInButton />
          </label>{" "}
          to see your expenses
        </div>
      </SignedOut>
      <SignedIn>
        <h1 className="text-4xl font-bold">Expenses</h1>
        <UploadExpenseButton />
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="text-center">
                <td className="px-4 py-2">{expense.expenseDate}</td>
                <td className="px-4 py-2">{expense.description}</td>
                <td className="px-4 py-2">{expense.amount} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SignedIn>
    </main>
  );
}
