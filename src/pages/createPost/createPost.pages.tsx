import React, { useEffect, useState } from "react";
import "./createPost.pages.scss";
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { getTimeZoneRequest } from "../../api/timeZone.api";
import { createPostChecker } from "../../utils/createPost/createPostChecker.utils";
import { useDispatch } from "react-redux";

export const CreatePostPage = (): JSX.Element => {
  const [timeZones, setTimeZones] = useState<Array<string>>();
  const [timeZone, setTimeZone] = useState<string>();
  const [text, setText] = useState<string>("");
  const [sign, setSign] = useState<string>("");
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeZone(event.target.value);
  };

  const saveInfo = () => {
    localStorage.setItem("author", sign);
    localStorage.setItem("timeZone", timeZone);
  }

  useEffect(() => {
    getTimeZoneRequest(setTimeZones);
    setSign(localStorage.getItem("author"));
    setTimeZone(localStorage.getItem("timeZone"));
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
        inputProps={{ maxLength: 100 }}
        value={sign}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSign(event.target.value)}
      />
      <TextField
        id="outlined-select-currency"
        className="createPostForm_timeSelect"
        select
        label="Точное время по:"
        value={timeZone !== undefined ? timeZone : ""}
        onChange={handleChange}
      >
        {!!timeZones && (
          timeZones.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))
        )}
      </TextField>
      <LoadingButton
        variant="contained"
        endIcon={<SendIcon />}
        disabled={timeZones === undefined ? true : false}
        loading={loading}
        onClick={
          () => {
            setLoading(true);
            createPostChecker(timeZone, text, sign, dispatch, setLoading, setText);
            saveInfo();
          }
        }
      >
        Создать
      </LoadingButton>
    </Box>
  )
}
