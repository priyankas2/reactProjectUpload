import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from '@mui/material';

const StyledButton = styled(Button)({
  backgroundColor: '#1976d2',
  borderRadius: '6px',
  color: 'white',
  padding: '10px 20px',
});

const ShowButton=( {excelData} ) => {
  const [tableData, setTableData] = useState(null);
  const [showButtonVisible, setShowButtonVisible] = useState(true); // State to manage button visibility

  const handleDisplay = () => {
    if (excelData) {
      const workbook = XLSX.read(excelData, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      setTableData(jsonData);
      setShowButtonVisible(false);
    }
  };

  return (
    <Box>
      {showButtonVisible && ( 
        <StyledButton variant="contained" onClick={handleDisplay}>
          Show Excel
        </StyledButton>
      )}
      {tableData && (
        <TableContainer component={Paper} style={{marginLeft: 20, paddingLeft: 20, paddingRight: 20}}>
          <Table>
            <TableHead>
              <TableRow>
                {tableData[0].map((cell, index) => (
                  <TableCell key={index}>{cell}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.slice(1).map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default ShowButton;

