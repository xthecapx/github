import React, {
  createContext,
  useState,
  ChangeEvent,
  FunctionComponent,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export const FormContext = createContext<{
  form: { query: string };
  updateField: (e: ChangeEvent<HTMLInputElement>) => void;
  searchParam: string;
  setSearchParam: Dispatch<SetStateAction<string>>;
}>({
  form: {
    query: "",
  },
  updateField: () => {},
  searchParam: "",
  setSearchParam: () => {},
});

export const FormProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [form, setFormState] = useState<{ query: string }>({
    query: "",
  });
  const [searchParam, setSearchParam] = useState<string>("");

  const updateField = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FormContext.Provider
      value={{
        form,
        updateField,
        searchParam,
        setSearchParam,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
