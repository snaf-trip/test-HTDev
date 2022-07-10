import React from "react";
import "./createPost.pages.scss";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export const CreatePost = (): JSX.Element => {

  const [currency, setCurrency] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      className="createPostForm"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-multiline-static"
        label="Запись"
        multiline
        rows={4}
        className="createPostForm_textInput"
      />
      <TextField
        id="outlined-basic"
        className="createPostForm_autorInput"
        required
        label="Подпись"
        variant="outlined"
      />
      <TextField
        id="outlined-select-currency"
        className="createPostForm_timeSelect"
        select
        label="Точное время по:"
        value={currency}
        onChange={handleChange}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" endIcon={<SendIcon />}>
        Создать
      </Button>
    </Box>
  )
}
