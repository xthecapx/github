import React, {
  createContext,
  ChangeEvent,
  FunctionComponent,
  ReactNode,
  useReducer,
} from "react";
import { PAGE_SIZE } from "../api/useRequest";

type FormFields = {
  query: string;
};

type State = {
  form: FormFields;
  searchParam: string;
  page: number;
  count: number;
  loading: boolean;
  targetUser: string;
  appStatus: string;
};

type Action =
  | { type: "setSearchParam" }
  | { type: "setPage"; payload: number }
  | { type: "setTotalPages"; payload: number }
  | { type: "setLoadingStatus"; payload: boolean }
  | { type: "setTargetUser"; payload: string }
  | { type: "setAppStatus"; payload: "initial" | "playing" | "winner" | "lose" | "try-again" }
  | { type: "updateForm"; payload: object };

const initialState: State = {
  form: { query: "" },
  searchParam: "",
  page: 1,
  count: 1,
  loading: false,
  targetUser: "",
  appStatus: "initial",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "setSearchParam":
      return { ...state, searchParam: state.form.query };
    case "setPage":
      return { ...state, page: action.payload };
    case "setLoadingStatus":
      return { ...state, loading: action.payload };
    case "setTargetUser":
      return { ...state, targetUser: action.payload };
    case "setAppStatus":
      return { ...state, appStatus: action.payload };
    case "setTotalPages":
      return { ...state, count: Math.ceil(action.payload / PAGE_SIZE) };
    case "updateForm":
      return { ...state, form: { ...state.form, ...action.payload } };
    default:
      throw new Error();
  }
}

export const FormContext = createContext<{
  changePageHandler: (event: any, value: number) => void;
  form: { query: string };
  page: number;
  searchParam: string;
  count: number;
  loading: boolean;
  targetUser: string;
  appStatus: string;
  updateField: (e: ChangeEvent<HTMLInputElement>) => void;
  dispatch: any;
}>({
  ...initialState,
  changePageHandler: () => {},
  updateField: () => {},
  dispatch: () => {},
});

export const FormProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changePageHandler = (event: any, value: number) => {
    dispatch({ type: "setPage", payload: value });
  };

  const updateField = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "updateForm",
      payload: {
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <FormContext.Provider
      value={{
        form: state.form,
        page: state.page,
        searchParam: state.searchParam,
        count: state.count,
        loading: state.loading,
        targetUser: state.targetUser,
        appStatus: state.appStatus,
        updateField,
        changePageHandler,
        dispatch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
