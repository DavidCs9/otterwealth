// CREATE TABLE Expenses (
//   id SERIAL PRIMARY KEY,
//   user_id INT REFERENCES Users(id),
//   category_id INT REFERENCES Categories(id),
//   amount DECIMAL(10, 2) NOT NULL,
//   description TEXT,
//   expense_date DATE NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

const mockExpenses = [
  {
    id: 1,
    user_id: 1,
    category_id: 1,
    amount: 100,
    description: "Lunch",
    expense_date: "2021-08-01",
    created_at: "2021-08-01T10:00:00",
  },
  {
    id: 2,
    user_id: 1,
    category_id: 2,
    amount: 50,
    description: "Dinner",
    expense_date: "2021-08-01",
    created_at: "2021-08-01T20:00:00",
  },
  {
    id: 3,
    user_id: 1,
    category_id: 3,
    amount: 20,
    description: "Breakfast",
    expense_date: "2021-08-02",
    created_at: "2021-08-02T08:00:00",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
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
          {mockExpenses.map((expense) => (
            <tr key={expense.id}>
              <td className="px-4 py-2">{expense.expense_date}</td>
              <td className="px-4 py-2">{expense.description}</td>
              <td className="px-4 py-2">{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
