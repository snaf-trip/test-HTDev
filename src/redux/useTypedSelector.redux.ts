import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./reducers/reducers.redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
