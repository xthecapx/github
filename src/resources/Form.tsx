import React, {
  createContext,
  useState,
  ChangeEvent,
  FunctionComponent,
  ReactNode,
} from "react";

export const FormContext = createContext<
  Partial<{
    form: { query: string };
    updateField: (e: ChangeEvent<HTMLInputElement>) => void;
  }>
>({});

export const FormProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [form, setFormState] = useState<{ query: string }>({
    query: "",
  });

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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
