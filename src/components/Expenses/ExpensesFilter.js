import './ExpensesFilter.css';

const ExpenseFilter = props => {
  const dropdownChangeHandler = event => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>فیلتر بر اساس سال</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">1401</option>
          <option value="2021">1400</option>
          <option value="2020">1399</option>
          <option value="2019">1398</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
