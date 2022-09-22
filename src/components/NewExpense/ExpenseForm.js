import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = props => {
	const initFormData = {
		enteredTitle: "",
		enteredAmount: "",
		enteredDate: "",
	};
	const [userInput, setUserInput] = useState(initFormData);

	const titleChangeHandler = event => {
		setUserInput(prevState => ({
			...prevState,
			enteredTitle: event.target.value,
		}));
	};

	const amountChangeHandler = event => {
		setUserInput(prevState => ({
			...prevState,
			enteredAmount: event.target.value,
		}));
	};

	const dateChangeHandler = event => {
		setUserInput(prevState => ({
			...prevState,
			enteredDate: event.target.value,
		}));
	};

	const submitHandler = event => {
		event.preventDefault();

		const expenseData = {
			title: userInput.enteredTitle,
			amount: +userInput.enteredAmount,
			date: new Date(userInput.enteredDate),
		};

		props.onSaveExpenseData(expenseData);

		setUserInput(initFormData);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>عنوان</label>
					<input
						type="text"
						value={userInput.enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>مقدار</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={userInput.enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>تاریخ</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={userInput.enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>
					انصراف
				</button>
				<button type="submit">افزودن هزینه</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
