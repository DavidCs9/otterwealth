import { getExpenses } from "../actions/expenses";

export default async function ListExpenses() {
  const expenses = await getExpenses();

  return (
    <div>
      <h1 className="text-4xl font-bold">Expenses</h1>
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
    </div>
  );
}
