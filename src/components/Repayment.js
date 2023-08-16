import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PageSection from './PageSection';
import PageContainer from './PageContainer';

// Define loan repayment data
const loanRepayments = [
  {
    loanNumber: "001R",
    name: 'Enoch Maonga',
    date: '2023-08-15',
    principalPaid: 0,
    interestPaid: 10000,
    totalRepayment: 0,
    loanBalance: 100000,
    totalInterest: 10000,
    interestBalance: 0,
  },
  {
    loanNumber: "002R",
    name: 'Stephen Maganga',
    date: '2023-08-15',
    principalPaid: 5000,
    interestPaid: 1000,
    totalRepayment: 5000,
    loanBalance: 5000,
    totalInterest: 1000,
    interestBalance: 0,
  },
];

function LoanRepaymentTable() {
  const [filteredData, setFilteredData] = React.useState(loanRepayments);
  const [nameFilter, setNameFilter] = React.useState('');
  const [dateFilter, setDateFilter] = React.useState('');

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleDateFilterChange = (event) => {
    setDateFilter(event.target.value);
  };

  React.useEffect(() => {
    const filtered = loanRepayments.filter(
      (row) =>
        row.name.includes(nameFilter) && row.date.includes(dateFilter)
    );
    setFilteredData(filtered);
  }, [nameFilter, dateFilter]);

  const columnTotals = loanRepayments.reduce(
    (totals, row) => {
      totals.principalPaid += row.principalPaid;
      totals.interestPaid += row.interestPaid;
      totals.totalRepayment += row.totalRepayment;
      totals.loanBalance += row.loanBalance;
      totals.totalInterest += row.totalInterest;
      totals.interestBalance += row.interestBalance;
      return totals;
    },
    {
      principalPaid: 0,
      interestPaid: 0,
      totalRepayment: 0,
      loanBalance: 0,
      totalInterest: 0,
      interestBalance: 0,
    }
  );
  return (
    <PageSection>
      <PageContainer>
      <div>
          <label htmlFor="nameFilter">Name: </label>
          <input
            type="text"
            id="nameFilter"
            value={nameFilter}
            onChange={handleNameFilterChange}
          />
          <label htmlFor="dateFilter">Date: </label>
          <input
            type="text"
            id="dateFilter"
            value={dateFilter}
            onChange={handleDateFilterChange}
          />
        </div>
        <TableContainer component={Paper} sx={{mt: 5}}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="loan repayment table">
            <TableHead>
              <TableRow>
                <TableCell>Loan Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell align="right">Principal Paid</TableCell>
                <TableCell align="right">Interest Paid</TableCell>
                <TableCell align="right">Total Repayment</TableCell>
                <TableCell align="right">Loan Balance</TableCell>
                <TableCell align="right">Total Interest</TableCell>
                <TableCell align="right">Interest Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loanRepayments.map((row) => (
                <TableRow
                  key={row.loanNumber}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.loanNumber}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell align="right">{row.principalPaid}</TableCell>
                  <TableCell align="right">{row.interestPaid}</TableCell>
                  <TableCell align="right">{row.totalRepayment}</TableCell>
                  <TableCell align="right">{row.loanBalance}</TableCell>
                  <TableCell align="right">{row.totalInterest}</TableCell>
                  <TableCell align="right">{row.interestBalance}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={3} align="right"><strong>Totals:</strong></TableCell>
                <TableCell align="right"><strong>{columnTotals.principalPaid}</strong></TableCell>
                <TableCell align="right"><strong>{columnTotals.interestPaid}</strong></TableCell>
                <TableCell align="right"><strong>{columnTotals.totalRepayment}</strong></TableCell>
                <TableCell align="right"><strong>{columnTotals.loanBalance}</strong></TableCell>
                <TableCell align="right"><strong>{columnTotals.totalInterest}</strong></TableCell>
                <TableCell align="right"><strong>{columnTotals.interestBalance}</strong></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </PageContainer>
    </PageSection>
  );
}

export default LoanRepaymentTable;