import Chart from '../Chart/Chart';

const ExpensesChart = props => {
  const chartDataPoints = [
    { key: 'Apr', label: 'فروردین', value: 0 },
    { key: 'May', label: 'اردیبهشت', value: 0 },
    { key: 'Jun', label: 'خرداد', value: 0 },
    { key: 'Jul', label: 'تیر', value: 0 },
    { key: 'Aug', label: 'مرداد', value: 0 },
    { key: 'Sep', label: 'شهریور', value: 0 },
    { key: 'Oct', label: 'مهر', value: 0 },
    { key: 'Nov', label: 'آبان', value: 0 },
    { key: 'Des', label: 'آذر', value: 0 },
    { key: 'Jan', label: 'دی', value: 0 },
    { key: 'Feb', label: 'بهمن', value: 0 },
    { key: 'Mar', label: 'اسفند', value: 0 }
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
