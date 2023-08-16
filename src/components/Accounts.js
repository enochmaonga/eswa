import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import PageContainer from './PageContainer';
import PageSection from './PageSection';
import { Card, Paper, Typography } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';


const BoldTableCell = ({ children }) => (
  <TableCell>
    <Typography sx={{fontWeight: "bold"}}>{children}</Typography>
  </TableCell>
);

function Accounts({data}) {


  return (
    <PageSection>
      <PageContainer>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Typography variant='h5'>Loan Details</Typography>
      </div>
        <Card sx={{ backgroundColor: '#eceff1'}}>
        <Table style={{ width: '100%' }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <BoldTableCell>Loan Number</BoldTableCell>
              <BoldTableCell>First Name</BoldTableCell>
              <BoldTableCell>Middle Name</BoldTableCell>
              <BoldTableCell>Last Name</BoldTableCell>
              <BoldTableCell>ID</BoldTableCell>
              <BoldTableCell>Email</BoldTableCell>
              <BoldTableCell>Phone</BoldTableCell>
              <BoldTableCell>Address</BoldTableCell>
              <BoldTableCell>Loan Amount</BoldTableCell>
              <BoldTableCell>Repayment Period</BoldTableCell>
              <BoldTableCell>Loan Date</BoldTableCell>
              <BoldTableCell>Interest Due Date</BoldTableCell>
              <BoldTableCell>Interest Amount</BoldTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
                <TableRow key={row.id}>
                <TableCell>{row.loanNumber}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.middleName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.loanAmount}</TableCell>
                <TableCell>{row.repaymentPeriod}</TableCell>
                <TableCell>{row.loanDate}</TableCell>
                <TableCell>{row.interestDueDate}</TableCell>
                <TableCell>{row.interestAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Card>
      </PageContainer>
    </PageSection>
  );
}

export default Accounts;