import React, {
  createContext,
  ChangeEvent,
  FunctionComponent,
  ReactNode,
  useReducer,
} from "react";

type FormFields = {
  query: string;
};

type State = {
  form: FormFields;
  searchParam: string;
  page: number;
};

type Action =
  | { type: "setSearchParam"; }
  | { type: "setPage"; payload: number }
  | { type: "updateForm"; payload: object };

const initialState = { form: { query: "" }, searchParam: "", page: 1 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "setSearchParam":
      return { ...state, searchParam: state.form.query };
    case "setPage":
      return { ...state, page: action.payload };
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
        updateField,
        changePageHandler,
        dispatch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
