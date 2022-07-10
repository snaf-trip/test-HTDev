import { AlertColor } from "@mui/material";

export interface SnackbarState {
  open: boolean,
  text: string,
  severity: AlertColor | undefined,
}

export interface SnackbarAction {
  type: string,
  text: string,
  severity: AlertColor | undefined,
}
