import { useUnit } from 'effector-react';
import { diceGameModel } from './model';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from '@mui/material';
import { theme } from '@/shared/theme';
import { WinTable } from './components/win-table';
import type { GuessValue } from './model/types';

export const DiceGame = () => {
  const model = useUnit(diceGameModel);

  return (
    <Box
      sx={{
        padding: '21px 16px 16px',
      }}
    >
      <Alert
        sx={{
          opacity: Number(model.isAlertShowed),
          maxWidth: 600,
          margin: '0 auto',
          transition: 'opacity 0.3s',
        }}
        severity={model.isWin ? 'success' : 'error'}
      >
        {model.isWin ? (
          'You won'
        ) : (
          <>
            <AlertTitle>You lost</AlertTitle>
            {`Number was ${model.guess === 'under' ? 'higher' : 'lower'}`}
          </>
        )}
      </Alert>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          maxWidth: 320,
          margin: '16px auto 16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.action.hover,
            marginBottom: '16px',
            height: 200,
          }}
        >
          <Typography
            color={model.generatedNumber ? '#000' : '#CACACA'}
            variant="h1"
          >
            {model.generatedNumber || '???'}
          </Typography>
        </Box>
        <RadioGroup
          sx={{ justifyContent: 'center' }}
          row
          value={model.guess}
          onChange={(ev) => model.guessChanged(ev.target.value as GuessValue)}
          name="is-low-or-high-group"
        >
          <FormControlLabel
            label="Under"
            value="under"
            color="secondary"
            sx={{ flexDirection: 'row-reverse' }}
            control={<Radio />}
          />
          <FormControlLabel
            label="Over"
            value="over"
            color="secondary"
            sx={{ flexDirection: 'row-reverse' }}
            control={<Radio />}
          />
        </RadioGroup>
        <Slider
          aria-labelledby="Expected number"
          defaultValue={20}
          valueLabelDisplay="auto"
          color="secondary"
          marks={[
            { value: 1, label: '1' },
            { value: 100, label: '100' },
          ]}
          onChangeCommitted={(_, newNumber) =>
            model.expectedNumberChanged(newNumber)
          }
          min={1}
          max={100}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ padding: '9px 16px' }}
          onClick={model.playClicked}
        >
          Play
        </Button>
      </Box>
      <WinTable history={model.history} />
    </Box>
  );
};
