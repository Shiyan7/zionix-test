import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { DiceHistory } from '../model/types';
import { theme } from '@/shared/theme';

interface WinTableProps {
  history: DiceHistory;
}

// ToDo: move to config file
const tableHeadItems = ['Time', 'Guess', 'Result'];

export const WinTable = ({ history }: WinTableProps) => {
  const TableRows = history.map((item) => (
    <TableRow key={item.id}>
      <TableCell>{item.time}</TableCell>
      <TableCell>{item.guess}</TableCell>
      <TableCell
        sx={{
          color: item.isWin
            ? theme.palette.success.dark
            : theme.palette.error.dark,
        }}
      >
        {item.result}
      </TableCell>
    </TableRow>
  ));

  const NoDataMessage = (
    <TableRow>
      <TableCell colSpan={5} align="center">
        No history yet
      </TableCell>
    </TableRow>
  );

  return (
    <TableContainer
      sx={{
        maxWidth: 600,
        margin: '0 auto',
      }}
    >
      <Table aria-label="Winning table">
        <TableHead>
          <TableRow>
            {tableHeadItems.map((item) => (
              <TableCell key={item}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{history.length > 0 ? TableRows : NoDataMessage}</TableBody>
      </Table>
    </TableContainer>
  );
};
