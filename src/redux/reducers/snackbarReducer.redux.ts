import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from "../actionTypes.redux";
import { SnackbarState, SnackbarAction } from "../types/snackbarTypes.redux";

const initalState: SnackbarState = {
  open: false,
  text: '',
  severity: undefined,
}

export const snackbarReducer = (state = initalState, action: SnackbarAction): SnackbarState => {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return { open: true, text: action.text, severity: action.severity }
    case CLOSE_SNACKBAR:
      return { open: false, text: state.text, severity: state.severity }
    default:
      return state
  }
}
