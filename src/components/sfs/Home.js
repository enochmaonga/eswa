import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Avatar,
  Box,
  Grid,
} from "@mui/material";

const years = Array.from({ length: 12 }, (_, index) => 2013 + index);

const BoldTableCell = ({ children }) => (
  <TableCell style={{ fontWeight: "bold" }}>{children}</TableCell>
);

function Home({ data }) {
  return (
    <Card
      style={{
        width: "98%",
        minHeight: "100vh",
        borderRadius: "3vh",
      
      }}
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ fontStyle: "bold" }}>
            <TableRow>
              <BoldTableCell></BoldTableCell>
              <BoldTableCell>Avatar</BoldTableCell>
              <BoldTableCell>FullName</BoldTableCell>
              {years.map((year) => (
                <BoldTableCell key={year}>{year}</BoldTableCell>
              ))}
              <BoldTableCell>Total</BoldTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row) => {
                // Calculate the total for each row
                const rowTotal = years.reduce(
                  (total, year) => total + row[year],
                  0
                );

                return (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <Avatar alt={row.fullName} src={row.avatarUrl} />
                    </TableCell>
                    <TableCell>{row.fullName}</TableCell>
                    {years.map((year) => (
                      <TableCell key={year}>{row[year]}</TableCell>
                    ))}
                    <TableCell>{rowTotal}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default Home;
