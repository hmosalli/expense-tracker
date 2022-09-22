import React, { Fragment, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "دستمال توالت",
		amount: 9400,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		title: "تلویزیون جدید",
		amount: 7990000,
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		title: "بیمه ماشین",
		amount: 294000,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "میز نو (چوبی)",
		amount: 450000,
		date: new Date(2021, 5, 12),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = expense => {
		setExpenses(prevExpenses => [expense, ...prevExpenses]);
	};

	return (
		<Fragment>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</Fragment>
	);
};

export default App;
