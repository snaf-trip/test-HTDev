import React, { useEffect, useState } from "react";
import "./createPost.pages.scss";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { getTimeZoneRequest } from "../../api/timeZone.api";
import { createPostChecker } from "../../utils/createPost/createPostChecker.utils";

export const CreatePostPage = (): JSX.Element => {
  const [timeZones, setTimeZones] = useState<Array<string>>();
  const [timeZone, setTimeZone] = useState<string>();
  const [text, setText] = useState<string>("");
  const [sign, setSign] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeZone(event.target.value);
  };

  useEffect(() => {
    getTimeZoneRequest(setTimeZones);
  }, [])

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
        value={text}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        className="createPostForm_autorInput"
        required
        label="Подпись"
        variant="outlined"
        value={sign}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSign(event.target.value)}
      />
      <TextField
        id="outlined-select-currency"
        className="createPostForm_timeSelect"
        select
        label="Точное время по:"
        defaultValue={""}
        onChange={handleChange}
      >
        {timeZones !== undefined ?
          timeZones.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))
          :
          null
        }
      </TextField>
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={() => createPostChecker(timeZone, text, sign)}
      >
        Создать
      </Button>
    </Box>
  )
}
